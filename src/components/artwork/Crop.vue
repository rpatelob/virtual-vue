<template>
<li class="dropdown">
  <a href="javascript:void(0);" data-toggle="dropdown" data-hover="tooltip" @click="isImageText" data-placement="left" title="Crop">
        <i class="icon-Crop"></i>
    </a>
    <div class="dropdown-menu" v-show="isWorkSelected">
      <h2>Crop</h2>
        <div class="crop-ui-col">
          <div class="crop-editor cropImage"><img id="cropImageUrl" v-bind:src="cropImageUrl" style="height:225px" ></div>
        </div>
        <div class="action-button">
          <a href="javascript:void(0);"  id="cancelCrop" class="btn-default">Cancel</a>
            <a href="javascript:void(0);" id="confirmCrop" @click="confirmCrop" class="btn-default">Confirm</a>
        </div>
     </div>
 </li>
</template>
<script src="http://deepliquid.com/projects/Jcrop/js/jquery.Jcrop.js"> </script>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'crop',
  data () {
    return {
      open: true,
      cropImageUrl: '',
      imageAxis: [],
      jcrop_api: '',
      imageDimension: []
    }
  },
  methods: {
    isImageText () {
      if (this.isWorkSelected === false) {
        alert('Please select a Image/Text')
        return false
      } else {
        let isSelectedAreaKey = this.$store.state.isSelectedArea.value - 1
        let newcordinates = this.cordinates
        this.cropImageUrl = newcordinates.userUploadedImageUrl[isSelectedAreaKey].value
      }
    },
    confirmCrop: async function () {
      let crop = []
      let isSelectedAreaKey = this.$store.state.isSelectedArea.value - 1
      let newcordinates = this.cordinates
      let cropImage = newcordinates.userUploadedImage[isSelectedAreaKey].value

      // calculate crop dimension
      this.cropImageUrl = newcordinates.userUploadedImageUrl[isSelectedAreaKey].value
      let imgWidth, imgHeight
      let imgLoad = $('<img />')

      imgLoad.attr('src', this.cropImageUrl)
      imgLoad.on('load', function () {
        imgWidth = this.width
        imgHeight = this.height
      })

      imgWidth = imgLoad[0].width
      imgHeight = imgLoad[0].height
      let $img = $('#cropImageUrl')
      let width = $img.width()
      let height = $img.height()
      let tempHeight = (imgHeight / height).toFixed(2)
      let tempWidth = (imgWidth / width).toFixed(2)
      let tempX = (tempWidth * this.imageAxis['x'])
      let tempY = (tempHeight * this.imageAxis['y'])
      let tempH = (tempHeight * this.imageAxis['h']).toFixed(2)
      let tempW = (tempWidth * this.imageAxis['w']).toFixed(2)
      this.imageAxis['x'] = tempX
      this.imageAxis['y'] = tempY
      this.imageAxis['w'] = tempW
      this.imageAxis['h'] = tempH
      crop['cropAxis'] = this.imageAxis
      crop['cropImage'] = cropImage
      await this.$store.dispatch('cropImage', crop)
      let url
      let time = new Date().getTime()
      if (newcordinates.userUploadedImageUrl[isSelectedAreaKey].value.indexOf('?h=') !== -1) {
        url = newcordinates.userUploadedImageUrl[isSelectedAreaKey].value.replace('?', '?' + time)
      } else {
        url = newcordinates.userUploadedImageUrl[isSelectedAreaKey].value = newcordinates.userUploadedImageUrl[isSelectedAreaKey].value + '?' + time
      }
      this.cropImageUrl = url
      this.jcrop_api.setImage(this.cropImageUrl)
      newcordinates.cropped = newcordinates.cropped + 1

      this.$store.dispatch('setImageCordinates', newcordinates)
      return this.$store.dispatch('generateSequence', newcordinates)
    },
    initJcrop: function (oImg) {
      let vthis = this
      oImg.Jcrop({
        setSelect: [0, 0, 150, 150],
        onChange: this.showCoords
      }, function () {
        vthis.jcrop_api = this
      })
    },
    showCoords: function (c) {
      this.imageAxis['x'] = c.x
      this.imageAxis['y'] = c.y
      this.imageAxis['w'] = c.w
      this.imageAxis['h'] = c.h
    }
  },
  watch: {
    cordinates: {
      handler: function (val, oldVal) {
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters({
      cordinates: 'getImageCordinates',
      selecteArea: 'getIsSelectedArea'
    }),

    isWorkSelected: function () {
      if (this.selecteArea === null) {
        return false
      } else if (this.selecteArea.key === 'text') {
        return false
      } else {
        return true
      }
    }
  },
  mounted () {
    this.initJcrop($('.cropImage'))
  }
}
</script>
<style>
#obv-editor .crop-ui-col{
  height:225px; 
}
</style>

let filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%'
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%'
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%'
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: 'deg'
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: 'px'
    },    
    grayscale: {
        value: 0,
        min: 0,
        max: 200,
        unit: '%'
    },
    sepia: {
        value: 0,
        min: 0,
        max: 200,
        unit: '%'
    },
    invert: {
        value: 0,
        min: 0,
        max: 200,
        unit: '%'
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: '%'
    }
}

const presets = {
    normal: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        invert: 0,
        opacity: 100
    },

    vivid: {
        brightness: 110,
        contrast: 120,
        saturation: 140,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        invert: 0,
        opacity: 100
    },

    warm: {
        brightness: 105,
        contrast: 105,
        saturation: 120,
        hueRotation: 10,
        blur: 0,
        grayscale: 0,
        sepia: 20,
        invert: 0,
        opacity: 100
    },

    cool: {
        brightness: 95,
        contrast: 110,
        saturation: 110,
        hueRotation: 200,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        invert: 0,
        opacity: 100
    },

    blackWhite: {
        brightness: 100,
        contrast: 120,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        invert: 0,
        opacity: 100
    },

    vintage: {
        brightness: 95,
        contrast: 90,
        saturation: 80,
        hueRotation: 0,
        blur: 0,
        grayscale: 20,
        sepia: 40,
        invert: 0,
        opacity: 100
    },

    faded: {
        brightness: 110,
        contrast: 80,
        saturation: 70,
        hueRotation: 0,
        blur: 0,
        grayscale: 10,
        sepia: 10,
        invert: 0,
        opacity: 100
    },

    dramatic: {
        brightness: 90,
        contrast: 140,
        saturation: 110,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        invert: 0,
        opacity: 100
    },

    dreamy: {
        brightness: 110,
        contrast: 90,
        saturation: 120,
        hueRotation: 20,
        blur: 2,
        grayscale: 0,
        sepia: 10,
        invert: 0,
        opacity: 100
    }
}

const presetsContainer = document.querySelector('.presets')

const filtersConatiner = document.querySelector('.filters')

const imageCanvas = document.querySelector('#image-canvas')
const imageUpload = document.querySelector('#upload')
const canvasCtx = imageCanvas.getContext('2d')
let file = null
let image = null

const resetBtn = document.querySelector('.reset')
const downloadBtn = document.querySelector('.download')

function createFilters(){
    Object.keys(filters).forEach(key=> {
        const filterElement = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
        filtersConatiner.appendChild(filterElement)  
    })
}

function createPresets(){
    Object.keys(presets).forEach(key=> {
        const presetButton = document.createElement('button')
        presetButton.classList.add('btn')
        presetButton.innerText = key
        presetsContainer.appendChild(presetButton)


        presetButton.addEventListener('click', ()=> {
            const preset = presets[key]

            Object.keys(preset).forEach(key=> {
                filters[key].value = preset[key]
                const input = document.querySelector(`#${key}`)
                input.value = preset[key]
            })

            applyFilters()
        })
    })
}

createFilters()
createPresets()

imageUpload.addEventListener('change', (event)=> {

    file = event.target.files[0]
    const imagePlaceholder = document.querySelector('.placeholder')
    imagePlaceholder.style.display = 'none'

    const img = new Image()
    img.src = URL.createObjectURL(file)

    img.onload = () => {
        image = img
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        canvasCtx.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height)
    }
})


function createFilterElement(name, unit = "%", value, min, max){
    const div = document.createElement('div')
    div.classList.add('filter')

    const input = document.createElement('input')
    input.type = 'range'
    input.name = name
    input.id = name
    input.min = min
    input.max = max
    input.value = value
    input.unit = unit

    const p = document.createElement('p')
    p.innerText = name

    div.appendChild(p)
    div.appendChild(input)

    input.addEventListener('input', (event)=> {
        filters[name].value = input.value
        applyFilters()
    })

    return div
}

function applyFilters() {
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)

    canvasCtx.filter = `
        brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.contrast.value}${filters.contrast.unit})
        saturate(${filters.saturation.value}${filters.saturation.unit})
        hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
        blur(${filters.blur.value}${filters.blur.unit})
        grayscale(${filters.grayscale.value}${filters.grayscale.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        invert(${filters.invert.value}${filters.invert.unit})
        opacity(${filters.opacity.value}${filters.opacity.unit})
    `.trim()

    canvasCtx.drawImage(image, 0, 0)
}

resetBtn.addEventListener('click', ()=> {
    filters = {
        brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: '%'
        },
        contrast: {
            value: 100,
            min: 0,
            max: 200,
            unit: '%'
        },
        saturation: {
            value: 100,
            min: 0,
            max: 200,
            unit: '%'
        },
        hueRotation: {
            value: 0,
            min: 0,
            max: 360,
            unit: 'deg'
        },
        blur: {
            value: 0,
            min: 0,
            max: 20,
            unit: 'px'
        },    
        grayscale: {
            value: 0,
            min: 0,
            max: 200,
            unit: '%'
        },
        sepia: {
            value: 0,
            min: 0,
            max: 200,
            unit: '%'
        },
        invert: {
            value: 0,
            min: 0,
            max: 200,
            unit: '%'
        },
        opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: '%'
        }
    }
    applyFilters()
    filtersConatiner.innerHTML = ""
    createFilters()
})

downloadBtn.addEventListener('click', ()=> {
    const link = document.createElement('a')
    link.download = 'edited-image.png'
    link.href = imageCanvas.toDataURL('image/png')
    link.click()
})
const { FaceMatcher } = require("face-api.min.js");
const faceapi = require("face-api.js")
const vidoe = document.getElementById("vid")

Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    faceapi.nets.faceLandmarks68Net.loadFromUri("/models"),
    faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
]).then(start)

function start() {
    document.body.append("models loaded")

    navigator.getUserMedia({ vidoe: {} },
            stream => vidoe.srcObject = stream,
            err => console.error(err)
        )
        //vidoe.src = "../vidoes/spech.mp4"

    recognizeFaces();
}

async function recognizeFaces() {

    const labeledDescriptors = await loadLabeledImages()
    const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6)

    vidoe.addEventListener("play", () => {
        console.log("playing")

        const canvas = faceapi.creatCanvasFromMedia(vidoe)
        document.body.append(canvas)

        const displaySize = { width: vidoe.width, height: vidoe.height }
        faceapi.matchDimensions(canvas, displaySize)

        setInterval(async() => {
            const detection = await faceapi.detectAllFace(vidoe).withFaceLandmarks().withFaceDescriptors()
            const resizedDetections = faceapi.resizeResults(detection, displaySize)
            canvas.getContest("2d").clearRect(0, 0, canvas.width, canvas.height)

            const results = resizedDetections.map((d) => {

                return faceMatcher.findBestmatch(d.descriptor)

            })
            results.forEach((results, i) => {
                const box = resizedDetections[i].detection.box
                const drawBox = new faceapi.draw.DrawBox(box, { label: result.tostring() })
                drawBox.draw(canvas)
            })

        }, 100)
    })

}

function loadLabeledImages() {
    const labels = ["ssenyonga yasin"]

    return promise.all(
        labels.map(async(label) => {
            const descriptions = []
            for (let i = 1; 1 < 2; i++) {
                const img = await faceapi.fetchImage(`../labeled_Images/${labels}/${i}.jpg`)
                const detection = await faceapi.detectSinglefaces(img).withFaceLandmarks().withFaceDescriptor()

                descriptions.push(detection.descriptor)
            }
            document.body.append(label + "face loaded")
            return new faceapi.LabeledFaceDescriptors(label, descriptions)
        })
    )
}
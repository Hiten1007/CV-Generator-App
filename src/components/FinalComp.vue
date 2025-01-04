<script setup>
import { useRouter } from 'vue-router'

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const exportImage = () => {
  const previewElement = document.getElementById('cv-preview')
  html2canvas(previewElement, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png')

    const link = document.createElement('a')
    link.href = imgData
    link.download = 'CV.png'

    link.click()
  })
}

const exportPDF = () => {
  const previewElement = document.getElementById('cv-preview')

  html2canvas(previewElement, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    const imgWidth = canvas.width
    const imgHeight = canvas.height

    const ratio = imgWidth / imgHeight
    const pdfWidth = pageWidth
    let pdfHeight = pdfWidth / ratio

    if (pdfHeight > pageHeight) {
      pdfHeight = pageHeight
    }

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)

    let remainingHeight = imgHeight
    let position = pdfHeight

    while (remainingHeight > pageHeight) {
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, -position, pdfWidth, pdfHeight)

      remainingHeight -= pageHeight
      position += pdfHeight
    }

    pdf.save('CV.pdf')
  })
}
const router = useRouter()

const goToHome = () => {
  router.push('/')
}
const emit = defineEmits(['prev'])

const handlePrev = () => {
  emit('prev')
}
</script>

<template>
  <div>
    <div class="cont">
      <div class="buttons">
        <button class="button more" @click="exportPDF">Export as PDF</button>
        <button class="button more" @click="exportImage">Export as Image</button>
        <button class="button more" @click="goToHome">Go Back To Home</button>
      </div>
    </div>
    <div>
      <button @click.prevent="handlePrev" type="button" class="button" style="margin-left: 3rem">
        Back
      </button>
    </div>
  </div>
</template>
<style>
.cont {
  display: flex;
  justify-content: center;
}
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  margin: 4.5rem 0 6rem 0;
}

button {
  margin: 1.5rem 0;
  padding: 0.8rem 2.5rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1px;

  color: #ffffff;

  background: #000000;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  border: none;
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
}

.button:hover {
  background-color: white;
  color: black;
}

.more {
  width: 14.2rem;
  text-align: center;
}
</style>

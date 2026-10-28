import efSetPdf from '../assets/certificados/EF SET Certificate.pdf'

// Image certificates are auto-collected from src/assets/certificados.
// Drop a new image into that folder and it shows up here automatically.
const modules = import.meta.glob(
  '../assets/certificados/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
)

const imageCertificates = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src], index) => ({
    id: index + 1,
    type: 'image',
    src,
    title: `Certificate ${index + 1}`,
  }))

// PDF certificates are listed explicitly and open in a new tab.
const pdfCertificates = [
  {
    id: 'ef-set',
    type: 'pdf',
    src: efSetPdf,
    title: 'EF SET English Certificate',
  },
]

export const certificates = [...imageCertificates, ...pdfCertificates]

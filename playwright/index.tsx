// Import styles, initialize component theme here.
// import '../src/common.css';
import { setProjectAnnotations } from '@storybook/react' // or @storybook/vue3
import previewAnnotations from '../.storybook/preview'

setProjectAnnotations(previewAnnotations)

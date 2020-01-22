import { slides as css } from './slides/css/index.mdx';
import { slides as html } from './slides/html/index.mdx';
import { slides as introduction } from './slides/introduction/index.mdx';
import { slides as webBasic } from './slides/web-basic/index.mdx';

export const slides = [...introduction, ...webBasic, ...html, ...css];

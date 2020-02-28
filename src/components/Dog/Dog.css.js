import { css } from 'emotion';

export const BRAND_COLORS = ['#8093FF', '#FF502C', '#FF9472', '#FF91FF'];

export const dogWrapperStyles = css`
    border: 4px solid lightgrey;
    border-radius: 4px;
    height: 400px;
    width: 400px;
`;

export const imageStyles = css`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const overlayTextWrapper = css`
    position: absolute;
    left: 0;
    right: 0;
    top: 450px;
`;

export const overlayTextStyles = indexPos => css`
    color: ${BRAND_COLORS[indexPos]};
    font-weight: bold;
`;

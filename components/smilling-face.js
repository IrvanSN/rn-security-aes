import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SmilingFace = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <Path
            fill="#FFDD67"
            d="M10.5 0C16.31 0 21 4.69 21 10.5S16.31 21 10.5 21 0 16.31 0 10.5 4.69 0 10.5 0Z"
        />
        <Path
            fill="#494949"
            d="M11.83 6.475c-.77.385-1.925.385-2.695 0-.805-.42-1.82-.7-3.045-.805-1.19-.105-3.675-.105-4.9.35-.14.035-.28.105-.42.175-.035.035-.07.07-.07.21v.175c0 .35-.035.21.21.35.49.28.77 1.015.91 2.03.21 1.47.945 2.415 2.1 2.835 1.085.42 2.31.385 3.395-.035.595-.245 1.12-.595 1.54-1.225.735-1.05.49-1.715.875-2.625.315-.805 1.225-.805 1.575 0 .385.91.14 1.575.875 2.625.42.595.945.98 1.54 1.225 1.085.42 2.31.455 3.395.035 1.19-.455 1.89-1.365 2.1-2.835.14-1.015.42-1.75.91-2.03.245-.14.21 0 .21-.35v-.175c0-.14 0-.175-.105-.21-.14-.07-.28-.14-.42-.175-1.26-.455-3.745-.455-4.9-.35-1.225.105-2.24.385-3.08.805Z"
        />
        <Path
            fill="#664E27"
            d="M14.91 14.105c-2.835 1.995-5.985 1.96-8.82 0-.35-.245-.63.175-.42.56.875 1.4 2.59 2.695 4.83 2.695s3.955-1.26 4.83-2.695c.21-.385-.07-.805-.42-.56Z"
        />
    </Svg>
)
export default SmilingFace

import { ClipPath, Defs, G, Path, Svg } from "react-native-svg"

import React from "react"

export default function TitleIcon(props: { size?: number; dark?: boolean }) {
	const { dark = false } = props
	return (
		<Svg
			width={props.size ? (90 / 22) * props.size : 190}
			height={props.size ?? 22}
			viewBox="0 0 90 22"
			fill="none">
			<G fill={dark ? "#232323" : "#2AB9E5"} clipPath="url(#a)">
				<Path d="M6.458 21.56c-.95 0-2.021-.081-3.217-.245-.654-.082-1.105-.254-1.35-.516-.246-.261-.352-.687-.32-1.276.115-1.621.385-3.618.811-5.992a77.52 77.52 0 0 1 1.547-6.9c.115-.41.344-.696.688-.86.343-.164.794-.246 1.35-.246.999 0 1.498.279 1.498.835 0 .23-.049.491-.147.786-.426 1.31-.851 3.07-1.277 5.28a62.562 62.562 0 0 0-.909 6.286c.491.05 1.048.074 1.67.074 2.865 0 5.002-.868 6.41-2.603 1.424-1.736 2.136-4.052 2.136-6.95 0-1.948-.557-3.454-1.67-4.518-1.113-1.064-2.685-1.596-4.715-1.596-1.31 0-2.611.204-3.904.614a14.33 14.33 0 0 0-3.463 1.62 1.185 1.185 0 0 1-.687.221.774.774 0 0 1-.663-.343A1.557 1.557 0 0 1 0 4.347c0-.393.065-.713.196-.958.131-.262.352-.5.663-.712 1.13-.77 2.456-1.35 3.979-1.744C6.36.524 7.825.32 9.233.32c1.997 0 3.725.352 5.182 1.056 1.457.688 2.578 1.703 3.364 3.045.786 1.343 1.179 2.963 1.179 4.862 0 2.473-.491 4.633-1.474 6.483-.982 1.834-2.415 3.258-4.297 4.273-1.883 1.015-4.126 1.523-6.729 1.523ZM31.553 15.961a.54.54 0 0 1 .492.295c.13.197.196.467.196.81 0 .655-.155 1.163-.466 1.523-.606.737-1.466 1.416-2.579 2.038a7.051 7.051 0 0 1-3.536.933c-1.719 0-3.053-.466-4.003-1.4-.95-.933-1.424-2.21-1.424-3.83 0-1.13.237-2.178.712-3.143.475-.983 1.13-1.76 1.965-2.333.85-.573 1.809-.86 2.873-.86.95 0 1.71.287 2.284.86.573.556.859 1.318.859 2.283 0 1.13-.41 2.104-1.228 2.923-.802.802-2.169 1.44-4.1 1.915.409.753 1.186 1.13 2.332 1.13.737 0 1.572-.254 2.505-.762a8.425 8.425 0 0 0 2.456-2.038c.196-.229.417-.344.663-.344Zm-6.188-3.56c-.605 0-1.121.352-1.547 1.056-.409.704-.614 1.555-.614 2.553v.05c.966-.23 1.727-.573 2.284-1.032.557-.458.835-.99.835-1.596 0-.311-.09-.556-.27-.737-.164-.196-.393-.294-.688-.294Z" />
				<Path d="M42.517 13.972a.865.865 0 0 1 .245-.024c.246 0 .434.082.565.245.131.164.197.385.197.664 0 .507-.099.908-.295 1.203-.196.278-.491.483-.884.614a7.714 7.714 0 0 1-2.407.368c-.72 0-1.4-.098-2.038-.295-.474.77-.998 1.564-1.571 2.382-.655.933-1.22 1.572-1.695 1.916a2.694 2.694 0 0 1-1.62.515c-.672 0-1.204-.262-1.597-.785-.376-.524-.614-1.351-.712-2.48-.196-2.293-.294-4.298-.294-6.017v-.86c.016-.54.163-.916.442-1.129.278-.213.695-.32 1.252-.32.426 0 .737.099.933.295.213.18.32.492.32.934 0 1.882.114 4.33.343 7.342.982-1.457 1.72-2.62 2.21-3.487-.245-.475-.368-1.04-.368-1.695 0-.556.123-1.096.368-1.62a3.4 3.4 0 0 1 1.007-1.277 2.314 2.314 0 0 1 1.449-.491c.475 0 .86.172 1.154.515.295.328.442.81.442 1.45 0 .736-.196 1.579-.59 2.529.623-.033 1.45-.156 2.48-.369l.664-.123Z" />
				<Path d="M53.917 13.899c.212 0 .376.106.49.319.115.213.173.483.173.81 0 .786-.238 1.253-.712 1.4-.983.344-2.063.54-3.242.59-.311 1.375-.925 2.48-1.842 3.315-.916.818-1.956 1.227-3.118 1.227-.983 0-1.826-.237-2.53-.712a4.555 4.555 0 0 1-1.571-1.89 6.055 6.055 0 0 1-.54-2.554c0-1.245.237-2.35.712-3.316.474-.982 1.13-1.743 1.964-2.283a4.895 4.895 0 0 1 2.775-.835c1.244 0 2.243.434 2.996 1.301.77.851 1.22 1.907 1.35 3.168.77-.05 1.687-.213 2.75-.491a1.44 1.44 0 0 1 .345-.05Zm-8.055 5.058c.524 0 .974-.212 1.35-.638.394-.426.655-1.04.786-1.842a3.485 3.485 0 0 1-1.178-1.35 4.101 4.101 0 0 1-.393-1.769c0-.261.024-.523.074-.785h-.123c-.655 0-1.203.319-1.645.957-.426.623-.639 1.507-.639 2.653 0 .9.172 1.587.516 2.062.36.475.777.712 1.252.712Z" />
				<Path d="M64.048 15.962a.54.54 0 0 1 .49.294c.132.197.197.467.197.81 0 .656-.155 1.163-.466 1.523-.704.868-1.474 1.58-2.309 2.137-.835.556-1.792.835-2.873.835-3.34 0-5.01-2.35-5.01-7.048 0-.72.025-1.449.074-2.186h-.957c-.491 0-.827-.09-1.007-.27-.164-.18-.246-.466-.246-.86 0-.916.369-1.374 1.105-1.374h1.4c.278-1.801.704-3.447 1.277-4.936.573-1.49 1.26-2.677 2.063-3.56.818-.885 1.694-1.327 2.627-1.327.688 0 1.228.303 1.621.909.393.605.59 1.367.59 2.283 0 2.538-1.065 4.748-3.193 6.63h2.75c.262 0 .45.058.565.172.115.115.172.328.172.639 0 1.13-.925 1.694-2.775 1.694h-2.996c-.032.819-.049 1.457-.049 1.916 0 1.702.197 2.897.59 3.585.409.688 1.047 1.031 1.915 1.031.704 0 1.326-.213 1.866-.638.54-.426 1.179-1.064 1.916-1.916.196-.229.417-.343.663-.343ZM59.75 2.357c-.245 0-.524.311-.835.934-.294.605-.58 1.457-.86 2.553a35.864 35.864 0 0 0-.662 3.61c.966-.835 1.686-1.768 2.16-2.8.492-1.047.738-1.996.738-2.848 0-.966-.18-1.449-.54-1.449Z" />
				<Path d="M65.953 8.374c-.688 0-1.204-.156-1.547-.467-.344-.327-.516-.777-.516-1.35 0-.573.221-1.048.663-1.425.458-.393 1.023-.589 1.694-.589.606 0 1.097.147 1.474.442.376.295.565.712.565 1.252 0 .655-.213 1.18-.639 1.572-.425.377-.99.565-1.694.565Zm-.197 13.187c-1.064 0-1.842-.377-2.333-1.13-.474-.753-.712-1.752-.712-2.996 0-.737.09-1.678.27-2.824.197-1.162.442-2.243.737-3.241.147-.524.344-.884.59-1.08.245-.197.638-.295 1.178-.295.835 0 1.252.278 1.252.834 0 .41-.155 1.36-.466 2.849-.393 1.8-.59 3.02-.59 3.659 0 .491.066.867.197 1.13.131.261.352.392.663.392.295 0 .663-.204 1.105-.614.442-.409 1.031-1.056 1.768-1.94.197-.229.418-.343.663-.343a.54.54 0 0 1 .491.294c.131.197.197.467.197.81 0 .656-.156 1.163-.467 1.523-1.62 1.981-3.135 2.972-4.543 2.972Z" />
				<Path d="M81.303 13.899c.213 0 .376.106.49.319.115.213.173.483.173.81 0 .786-.238 1.253-.712 1.4-.983.344-2.063.54-3.242.59-.31 1.375-.925 2.48-1.842 3.315-.916.818-1.956 1.227-3.118 1.227-.982 0-1.826-.237-2.53-.712a4.556 4.556 0 0 1-1.571-1.89 6.055 6.055 0 0 1-.54-2.554c0-1.245.237-2.35.712-3.316.474-.982 1.13-1.743 1.964-2.283a4.895 4.895 0 0 1 2.775-.835c1.244 0 2.243.434 2.996 1.301.77.851 1.22 1.907 1.35 3.168.77-.05 1.687-.213 2.75-.491a1.44 1.44 0 0 1 .345-.05Zm-8.055 5.058c.524 0 .974-.212 1.35-.638.394-.426.656-1.04.787-1.842a3.485 3.485 0 0 1-1.18-1.35 4.101 4.101 0 0 1-.392-1.769c0-.261.025-.523.074-.785h-.123c-.655 0-1.203.319-1.645.957-.426.623-.639 1.507-.639 2.653 0 .9.172 1.587.516 2.062.36.475.777.712 1.252.712Z" />
				<Path d="M81.602 21.56c-.622 0-1.064-.327-1.326-.982-.246-.655-.369-1.703-.369-3.143 0-2.128.303-4.15.909-6.066.147-.474.385-.818.712-1.031.344-.23.819-.344 1.424-.344.328 0 .557.041.688.123.13.082.196.237.196.466 0 .262-.123.852-.368 1.769a37.624 37.624 0 0 0-.393 1.719c-.098.49-.18 1.096-.246 1.817.54-1.408 1.147-2.554 1.818-3.438.67-.884 1.326-1.514 1.964-1.891.655-.377 1.253-.565 1.793-.565.524 0 .917.14 1.178.418.279.262.418.654.418 1.178 0 .426-.09 1.228-.27 2.407a53.519 53.519 0 0 0-.393 2.848 27.107 27.107 0 0 0-.147 2.972c0 .622-.131 1.072-.393 1.35-.246.262-.655.393-1.228.393-.54 0-.933-.139-1.179-.417-.245-.279-.368-.696-.368-1.253 0-.654.114-1.735.344-3.241.196-1.31.294-2.145.294-2.505 0-.262-.09-.393-.27-.393-.213 0-.516.279-.908.835-.377.54-.77 1.26-1.18 2.161-.392.9-.711 1.85-.957 2.849-.18.77-.393 1.293-.638 1.571-.23.262-.598.393-1.105.393Z" />
			</G>
			<Defs>
				<ClipPath id="a">
					<Path fill="#fff" d="M0 0h90v22H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	)
}

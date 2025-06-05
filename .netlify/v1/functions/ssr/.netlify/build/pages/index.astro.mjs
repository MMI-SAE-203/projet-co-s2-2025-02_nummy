import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, f as renderSlot, a as renderTemplate, r as renderComponent, e as renderScript } from '../chunks/astro/server_Ds7egGoB.mjs';
import 'kleur/colors';
import { c as createSvgComponent, $ as $$Layout } from '../chunks/Layout_CgWoF0WD.mjs';
import { $ as $$Button } from '../chunks/Button_yD3ni9q3.mjs';
import { I as ImageLettre } from '../chunks/lettre_DGLD_fsI.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_DL_8c7iC.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const imagefille = new Proxy({"src":"/_astro/image.BSAMcH5x.webp","width":693,"height":890,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/assets/img/image.webp";
							}
							
							return target[name];
						}
					});

const IconPlanet = createSvgComponent({"meta":{"src":"/_astro/planet.D4OM6HY8.svg","width":51,"height":51,"format":"svg"},"attributes":{"mode":"inline","width":"51","height":"51","fill":"none"},"children":"<g clip-path=\"url(#a)\"><path d=\"M49.924 18.132c.007-.031.015-.062.021-.094l-.053-.01a25.374 25.374 0 00-6.361-10.56C38.715 2.654 32.311 0 25.5 0 18.689 0 12.285 2.653 7.469 7.469 2.652 12.285 0 18.689 0 25.5c0 6.811 2.652 13.215 7.469 18.031C12.285 48.348 18.689 51 25.499 51c6.812 0 13.216-2.652 18.032-7.469C48.347 38.715 51 32.311 51 25.501c0-2.534-.368-5.01-1.076-7.369zM36.677 4.96a23.43 23.43 0 014.994 3.662c-.142.394-.382.827-.755.827h-.018c-.32-.012-.692-.134-1.085-.263-.595-.195-1.27-.416-2.038-.355-.75.06-1.394.378-1.962.657-.532.262-.991.489-1.32.406-.314-.078-.641-.472-.977-.903-.15-.192-.242-.33-.276-.41.04-.067.121-.173.165-.229.423-.548 1.137-1.249 1.829-1.926.498-.49 1.007-.99 1.443-1.466zm-7.473-2.543c-.123.791-.466 1.834-.775 2.217-.343.424-.948.62-1.35.436-.405-.184-.726-.761-.858-1.543a6.176 6.176 0 00-.437-1.398c1.156.013 2.299.11 3.42.288zM8.971 8.972a23.256 23.256 0 019.771-5.86c.441 1.45.978 2.809 1.502 4.093.401.983.856 2.097.753 3.105-.04.386-.137.88-.382 1.04-.212.14-.64.175-1.09.213-.745.062-1.672.139-2.516.732-.18.126-.348.257-.51.383-.348.272-.676.529-.982.614-.303.085-.693.04-1.145-.01-.26-.03-.528-.06-.812-.07-.902-.033-2.958.4-3.853 1.57a2.133 2.133 0 00-.359 1.965c.157.512.491.869.799 1.15 1.434 1.316 3.403 2.248 5.402 2.557.285.044.562.078.83.11 1.465.18 2.194.31 2.748 1.309.138.249.25.543.367.855.136.359.276.73.48 1.104.606 1.112 1.628 1.763 2.665 1.705.775-.044 1.347-.448 1.806-.773.212-.15.413-.291.584-.363.46-.192 1.164-.021 1.88.456.492.328 1.127.87 1.365 1.59.179.543.055 1.171-.292 1.465l-3.123 2.667c-1.005.858-2.081 1.901-2.118 3.414-.011.478.088.938.175 1.343.06.284.163.758.108.882-.057.051-.325.117-.485.156-.282.069-.601.147-.926.311-1.573.794-1.72 2.676-1.817 3.922-.07.903-.406 1.663-.747 1.695-.278.026-.67-.454-.807-.986-.084-.33-.124-.699-.166-1.089-.06-.562-.13-1.198-.355-1.824-.29-.805-.797-1.47-1.243-2.056-.439-.575-.853-1.119-.987-1.684-.1-.424-.06-.933-.017-1.472.055-.687.117-1.465-.101-2.256-.31-1.126-1.076-1.93-1.753-2.64-.444-.466-.863-.906-1.113-1.382-.3-.573-.263-1.174-.22-1.87.041-.66.088-1.407-.175-2.176-.262-.768-.882-1.212-1.341-1.54a26.274 26.274 0 01-3.747-3.262c-.61-.642-1.206-1.343-1.437-2.12-.06-.202-.102-.355-.134-.475-.146-.534-.232-.725-.539-1.064a23.465 23.465 0 014.057-5.434zM25.5 48.874A23.221 23.221 0 018.97 42.029 23.222 23.222 0 012.125 25.5c0-2.953.545-5.823 1.585-8.494.402.991 1.084 1.796 1.773 2.522a28.413 28.413 0 004.058 3.53c.206.148.518.372.56.495.127.371.098.829.066 1.358-.053.842-.118 1.89.458 2.988.388.74.932 1.31 1.457 1.862.577.605 1.074 1.127 1.242 1.737.119.432.077.963.032 1.524-.051.648-.11 1.381.067 2.13.238 1.005.836 1.79 1.364 2.483.388.51.755.99.935 1.49.139.385.189.844.24 1.33.05.447.1.91.221 1.388.338 1.318 1.408 2.585 2.835 2.585.074 0 .148-.003.224-.01 1.483-.136 2.507-1.533 2.672-3.646.064-.816.151-1.935.657-2.19.108-.055.285-.098.473-.144.434-.106 1.028-.252 1.5-.735.863-.884.624-2 .45-2.813-.07-.318-.134-.619-.128-.846.015-.637.717-1.289 1.373-1.85l3.119-2.663c1.015-.859 1.39-2.365.934-3.75-.339-1.025-1.1-1.957-2.204-2.692-1.348-.899-2.725-1.13-3.876-.65-.389.162-.71.389-.993.59-.263.185-.535.377-.703.387-.166.01-.465-.213-.677-.6-.133-.246-.242-.534-.357-.839-.14-.369-.284-.75-.497-1.135-1.104-1.99-2.828-2.2-4.348-2.387-.252-.03-.511-.062-.764-.101-1.594-.247-3.157-.984-4.29-2.023a1.244 1.244 0 01-.206-.216.212.212 0 01-.003-.014c.14-.326 1.413-.786 2.115-.765.2.006.414.03.642.057.588.067 1.255.143 1.959-.054.71-.2 1.245-.617 1.717-.986a10.6 10.6 0 01.423-.32c.373-.261.882-.304 1.47-.353 1.166-.097 3.117-.26 3.411-3.155.156-1.535-.429-2.97-.9-4.123-.49-1.204-.994-2.474-1.406-3.807.885-.18 1.783-.307 2.692-.384l.153.345c.208.46.404.895.476 1.324.257 1.523.993 2.632 2.072 3.124.386.176.803.26 1.224.26.984 0 1.987-.462 2.66-1.294.54-.67 1.012-1.97 1.202-3.127 1.16.294 2.292.677 3.388 1.145-.294.3-.612.613-.926.92-.743.729-1.51 1.482-2.023 2.145-.203.262-.509.659-.596 1.208-.147.932.433 1.677.712 2.035.433.557 1.088 1.398 2.14 1.66.226.057.447.082.66.082.808 0 1.518-.35 2.113-.643.436-.215.847-.418 1.194-.445.34-.028.742.104 1.206.256.491.161 1.049.344 1.67.366.992.037 1.827-.437 2.4-1.316a23.191 23.191 0 014.452 7.812c-.157.113-.475.128-1.222.138-.325.004-.693.008-1.085.038-1.092.084-1.937-.229-2.915-.591-.657-.243-1.335-.495-2.147-.656-2.045-.407-4.159.736-5.384 2.91-.223.396-2.136 3.92-.72 5.87.528.728 1.277 1.177 1.879 1.538.853.512 1.736 1.04 2.713 1.435.21.084.42.162.625.238.743.274 1.446.533 1.79 1.005.288.394.383 1.018.292 1.907-.07.675-.321 1.361-.588 2.087-.597 1.63-1.34 3.657.402 5.648.497.567 1.094 1 1.754 1.284-.334.379-.68.75-1.04 1.11A23.222 23.222 0 0125.5 48.875zm18.986-9.733a2.699 2.699 0 01-1.573-.907c-.872-.996-.602-1.89-.006-3.516.3-.817.61-1.662.706-2.6.148-1.437-.077-2.542-.69-3.38-.722-.989-1.81-1.39-2.77-1.745a20.968 20.968 0 01-.565-.215c-.823-.332-1.597-.795-2.416-1.286-.48-.289-.978-.587-1.252-.964-.337-.464.077-2.203.852-3.578.582-1.033 1.748-2.142 3.118-1.87.646.129 1.218.34 1.824.565 1.11.411 2.26.838 3.816.717.324-.024.642-.029.948-.032.552-.007 1.193-.016 1.778-.206.408 1.741.619 3.542.619 5.375 0 4.965-1.54 9.693-4.39 13.642z\" fill=\"#FAF0E1\" /></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0H51V51H0z\" /></clipPath></defs>"});

const IconBulle = createSvgComponent({"meta":{"src":"/_astro/bulle.C4Mv8MqV.svg","width":68,"height":69,"format":"svg"},"attributes":{"mode":"inline","width":"68","height":"69","fill":"none"},"children":"<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M45.6 44.795a2.236 2.236 0 00-1.5-.063 17.886 17.886 0 01-5.776.713c-9.32-.376-16.595-7.791-16.252-16.56.343-8.769 8.177-15.574 17.496-15.2 9.321.374 16.594 7.791 16.252 16.56-.063 1.627-1.063 4.143-1.941 6.08a5.74 5.74 0 00-.422 3.523l1.243 6.017a1.637 1.637 0 01-.541 1.57 1.581 1.581 0 01-1.62.253l-6.94-2.893zm-29.19-16.14C15.93 41 26.065 50.706 38.1 51.19c2.16.089 4.322-.122 6.426-.626l5.86 2.443c5.385 2.249 11.055-2.538 9.86-8.323l-1.228-5.94.006-.01a41.863 41.863 0 001.485-3.68c.413-1.208.906-2.893.974-4.58C61.965 18.13 51.83 8.426 39.791 7.94c-12.038-.486-22.899 8.372-23.38 20.714z\" fill=\"#FAF0E1\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.286 37.527c.335.682.39 1.472.152 2.195a2.863 2.863 0 01-1.421 1.66c-.502.257-1.128.961-1.624 2.306a10.487 10.487 0 00-.623 3.79c.005.135.076.529.303 1.207.21.621.487 1.3.765 1.92.555 1.251.76 2.692.473 4.126l-.176.869 1.539-.656a4.333 4.333 0 012.958-.15 8.894 8.894 0 002.927.369 8.621 8.621 0 003.4-.822 8.736 8.736 0 002.81-2.11 2.84 2.84 0 01.88-.692 2.8 2.8 0 013.138.422c.28.251.509.557.672.899a2.91 2.91 0 01-.445 3.18 14.412 14.412 0 01-4.625 3.495 14.223 14.223 0 01-5.607 1.372 14.53 14.53 0 01-4.34-.48l-4.151 1.77c-2.907 1.237-5.998-1.333-5.366-4.47l.833-4.146a1.02 1.02 0 00-.085-.61 29.001 29.001 0 01-.964-2.431c-.272-.805-.563-1.843-.6-2.832a16.314 16.314 0 01.977-6.038c.731-1.975 2.066-4.246 4.397-5.43a2.802 2.802 0 013.125.4c.281.248.512.55.678.887z\" fill=\"#FAF0E1\" />"});

const IconMap = createSvgComponent({"meta":{"src":"/_astro/map.DWfBJHAF.svg","width":69,"height":69,"format":"svg"},"attributes":{"mode":"inline","width":"69","height":"69","fill":"none"},"children":"<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M23 13.639a5.75 5.75 0 014.675-.17l15.338 6.179 11.966-5.836a5.751 5.751 0 018.271 5.163v28.853a5.75 5.75 0 01-3.91 5.446l-13.935 4.712a5.75 5.75 0 01-3.93-.092l-15.876-6.187-11.394 6.075c-3.83 2.044-8.455-.733-8.455-5.072V25.674a5.75 5.75 0 013.22-5.164L23 13.64zm17.865 11.342l-15.338-6.179L11.5 25.674v27.033l11.396-6.075a5.751 5.751 0 014.793-.284l15.876 6.19L57.5 47.83V18.975l-11.966 5.836a5.752 5.752 0 01-4.669.167v.003z\" fill=\"#FAF0E1\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.875 14.211a2.875 2.875 0 012.875 2.875v31.38a2.875 2.875 0 11-5.75 0v-31.38a2.875 2.875 0 012.875-2.875zm17.25 5.704A2.875 2.875 0 0146 22.79v31.384a2.875 2.875 0 01-5.75 0V22.79a2.875 2.875 0 012.875-2.875z\" fill=\"#FAF0E1\" />"});

const Iconfood1 = createSvgComponent({"meta":{"src":"/_astro/food1.DBnjBsyE.svg","width":70,"height":70,"format":"svg"},"attributes":{"mode":"inline","width":"70","height":"70","fill":"none"},"children":"<g clip-path=\"url(#a)\"><path d=\"M55.45.706c.49-.53 1.311-.564 1.84-.074.53.49.565 1.31.075 1.84L46.7 14.014l-.017.023c-1.305 1.577-2.2 3.036-2.598 4.369-.353 1.179-.302 2.25.222 3.184.28.502.188 1.117-.182 1.521l-5.064 5.48c-.496-.54-.889-.98-1.151-1.264a5.04 5.04 0 00-.399-.462l-.011.012a3.776 3.776 0 00-.217-.211l4.33-4.689c-.507-1.355-.502-2.797-.034-4.329.5-1.663 1.566-3.435 3.099-5.28.034-.046.062-.092.102-.132L55.44.695l.012.011zM32.546 31.622a1.305 1.305 0 01.102-1.84 1.305 1.305 0 011.84.102C39.847 35.89 56.42 53.656 61.011 60.3c6.055 8.573-3.321 11.273-6.432 8.152-7.77-7.514-24.267-26.672-31.52-34.795-2.608 1.105-5.143 1.276-7.69.547-2.74-.781-5.423-2.61-8.146-5.418l-.034-.034c-2.073-2.188-3.697-4.347-4.87-6.483-1.202-2.199-1.937-4.375-2.2-6.534-.279-2.324-.062-4.489.565-6.409.734-2.255 2.039-4.164 3.748-5.582 1.72-1.424 3.834-2.347 6.192-2.632 1.96-.234 4.096-.034 6.306.69 3.06.996 6.625 3.474 9.582 6.653 2.182 2.341 4.05 5.081 5.161 7.901 1.157 2.94 1.51 5.981.581 8.83-.547 1.686-1.538 3.27-3.076 4.7-.53.49-1.35.455-1.84-.069-.49-.53-.456-1.35.068-1.84 1.191-1.11 1.954-2.324 2.37-3.606.718-2.204.416-4.648-.53-7.052-.99-2.518-2.671-4.98-4.642-7.093-2.666-2.86-5.828-5.075-8.494-5.947-1.829-.592-3.577-.763-5.178-.57-1.857.228-3.52.94-4.848 2.051-1.333 1.111-2.353 2.61-2.94 4.392-.506 1.556-.683 3.344-.45 5.275.223 1.823.855 3.686 1.892 5.589 1.088 1.954 2.58 3.93 4.5 5.953l.011.017c2.405 2.478 4.712 4.073 6.996 4.722 2.159.616 4.358.376 6.654-.769a1.3 1.3 0 011.617.268C31.44 39.13 48.65 59.074 56.271 66.462c3.31 1.35 5.144-.313 3.56-3.247-2.466-4.58-23.658-27.514-27.286-31.593zm-6.87 11.456L9.063 61.05c-.034.034-.062.068-.102.102-2.427 2.62 1.868 6.437 4.534 3.885l16.133-17.46 1.732 1.965-16.008 17.324c-.034.04-.068.074-.114.114-.957.803-1.92 1.327-2.893 1.544a4.431 4.431 0 01-2.934-.32 1.383 1.383 0 01-.439-.261l-2.296-2.125c-.034-.035-.068-.063-.102-.103-.889-1.025-1.31-2.119-1.196-3.275.108-1.094.689-2.16 1.788-3.185l16.771-18.15 1.738 1.972zm17.409-10.06l.985-1.066a1.3 1.3 0 011.84-.074c.524.49.564 1.31.074 1.84l-1.14 1.23-1.76-1.93zM59.5 4.518c.49-.53 1.31-.565 1.84-.075.53.49.564 1.31.074 1.84l-9.348 10.123c-.49.53-1.31.564-1.84.074a1.299 1.299 0 01-.074-1.84l9.348-10.123zm4.045 3.742c.49-.53 1.31-.564 1.84-.074.53.49.564 1.31.074 1.84l-9.343 10.117c-.49.53-1.31.564-1.84.074a1.299 1.299 0 01-.074-1.84L63.546 8.26zm4.192 3.89c.49-.529 1.31-.563 1.84-.073a1.3 1.3 0 01.075 1.84L58.988 25.464c-.04.04-.08.074-.12.114-2.426 2.335-4.745 3.686-6.96 4.067-2.404.416-4.609-.268-6.631-2.034a1.305 1.305 0 01-.126-1.834 1.305 1.305 0 011.835-.125c1.395 1.219 2.888 1.697 4.466 1.418 1.697-.29 3.566-1.413 5.605-3.378l.012-.011 10.658-11.536.011.006z\" fill=\"#FAF0E1\" /></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0H70V70H0z\" /></clipPath></defs>"});

const IconUser = createSvgComponent({"meta":{"src":"/_astro/user.BrMSzCO0.svg","width":67,"height":63,"format":"svg"},"attributes":{"mode":"inline","width":"67","height":"63","fill":"none"},"children":"<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M33.5 26.25a8.84 8.84 0 003.205-.6 8.43 8.43 0 002.717-1.706 7.862 7.862 0 001.816-2.555c.42-.956.637-1.98.637-3.014a7.468 7.468 0 00-.638-3.014 7.862 7.862 0 00-1.815-2.555 8.43 8.43 0 00-2.717-1.707A8.84 8.84 0 0033.5 10.5c-2.221 0-4.351.83-5.922 2.306-1.57 1.477-2.453 3.48-2.453 5.569s.882 4.092 2.453 5.569c1.57 1.476 3.7 2.306 5.922 2.306zm0 5.25c3.702 0 7.252-1.383 9.87-3.844 2.618-2.462 4.088-5.8 4.088-9.281 0-3.481-1.47-6.82-4.088-9.28-2.618-2.462-6.168-3.845-9.87-3.845-3.702 0-7.252 1.383-9.87 3.844-2.618 2.462-4.088 5.8-4.088 9.281 0 3.481 1.47 6.82 4.088 9.28 2.618 2.462 6.168 3.845 9.87 3.845zm-20.55 9.051c3.197-3.985 8.013-6.426 14.168-6.426h12.764c6.155 0 10.971 2.441 14.168 6.426 3.129 3.903 4.575 9.103 4.575 14.574 0 .696-.294 1.364-.818 1.856a2.884 2.884 0 01-1.974.769c-.74 0-1.45-.277-1.974-.769a2.548 2.548 0 01-.817-1.856c0-4.678-1.245-8.663-3.448-11.413-2.136-2.662-5.299-4.337-9.715-4.337H27.121c-4.416 0-7.58 1.675-9.715 4.337-2.205 2.75-3.448 6.735-3.448 11.413 0 .696-.294 1.364-.817 1.856a2.885 2.885 0 01-1.974.769c-.74 0-1.45-.277-1.974-.769a2.548 2.548 0 01-.818-1.856c0-5.47 1.446-10.67 4.575-14.574z\" fill=\"#FAF0E1\" /><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.375 55.125c0-.696.294-1.364.818-1.856a2.885 2.885 0 011.974-.769h44.56c.74 0 1.45.277 1.974.769s.818 1.16.818 1.856c0 .696-.294 1.364-.818 1.856a2.885 2.885 0 01-1.974.769h-44.56c-.74 0-1.45-.277-1.974-.769a2.548 2.548 0 01-.818-1.856z\" fill=\"#FAF0E1\" />"});

const ImageSoutien = new Proxy({"src":"/_astro/soutenir.BGlt8QZJ.webp","width":167,"height":238,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/assets/img/cardimg/soutenir.webp";
							}
							
							return target[name];
						}
					});

const ImageMains = new Proxy({"src":"/_astro/mains.d9OqkHPA.webp","width":122,"height":324,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/assets/img/cardimg/mains.webp";
							}
							
							return target[name];
						}
					});

const ImageRecette = new Proxy({"src":"/_astro/pokebowl.YqqVc-6N.webp","width":226,"height":271,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/assets/img/cardimg/pokebowl.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$CardLP = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardLP;
  const { bgColor = "var(--color-orange)", href = "/" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-2xl overflow-hidden shadow-md mx-8 relative flex"${addAttribute(`background-color: ${bgColor};`, "style")} data-astro-cid-m2k72ztq> <div class="px-10 py-15 relative z-10" data-astro-cid-m2k72ztq> <h3 class="text-4xl text-white font-header font-normal mb-2 tracking-wider" data-astro-cid-m2k72ztq> ${renderSlot($$result, $$slots["title"], renderTemplate`Titre par défaut`)} </h3> <p class="text-white p-body3" data-astro-cid-m2k72ztq> ${renderSlot($$result, $$slots["description"], renderTemplate`Description par défaut`)} </p> <div class="pt-5" data-astro-cid-m2k72ztq> ${renderSlot($$result, $$slots["button"], renderTemplate` ${renderComponent($$result, "Button", $$Button, { "variant": "lin", "href": href, "data-astro-cid-m2k72ztq": true }, { "default": ($$result2) => renderTemplate`Voir plus` })} `)} </div> </div> <div class="image-container" data-astro-cid-m2k72ztq> ${renderSlot($$result, $$slots["image"])} </div> </div> `;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/components/CardLP.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="hero-section" class="bg-gradient-to-b from-[var(--color-orange)] from-40% to-[#F5B97D] to-100% w-screen pt-5 pb-25 px-8 lg:px-0 rounded-b-[36px] transition-colors duration-1000 z-10"> <div class="lg:max-w-screen-xl lg:mx-auto lg:grid lg:grid-cols-11 lg:gap-5"> <!-- Image --> <div id="image-container" class="w-350px h-[450px] flex justify-center items-center pt-15 transition-opacity duration-500 lg:col-span-5 lg:h-[750px] lg:pt-10"> <div class="relative w-full h-full flex items-center justify-center"> <img id="hero-image"${addAttribute(imagefille.src, "src")} alt="Fille avec des fruits et légumes qui sourit et tient un panier" class="max-w-full max-h-full object-contain" loading="eager"> </div> </div> <!-- Slogan --> <div class="lg:col-span-6 lg:pt-80"> <div class="flex items-center tracking-widest text-white pt-12 pl-2 lg:pt-0"> <h1 class="text-[40px] lg:text-[60px]" style="-webkit-text-stroke: 1px var(--color-orange); color: white">
LE GOÛT DE CHEZ TOI OÙ QUE TU SOIS !
</h1> </div> <div> <span class="flex h-[4px] w-30 bg-white my-5 ml-2"></span> </div> <div class="flex text-white pl-2 font-bold"> <p class="p-body2 font-medium leading-6 pr-30 lg:text-xl lg:pr-0">
Plus besoin de chercher pendant des heures sur internet !
</p> </div> <!-- Button --> <div class="text-sm flex lg:justify-start justify-center pt-8"> ${renderComponent($$result2, "Button", $$Button, { "class": "px-4", "variant": "vert", "href": "/", "classes": "px-10 py-3" }, { "default": ($$result3) => renderTemplate`
DÉCOUVREZ VOS PRODUITS !
` })} </div> </div> <!-- Point carousel --> <div id="carousel-indicators" class="flex justify-center gap-3 pt-8 lg:col-span-11"> <div class="w-3 h-3 rounded-full bg-white opacity-50" data-index="0"></div> <div class="w-3 h-3 rounded-full bg-white opacity-50" data-index="1"></div> <div class="w-3 h-3 rounded-full bg-white opacity-50" data-index="2"></div> <div class="w-3 h-3 rounded-full bg-white opacity-50" data-index="3"></div> <div class="w-3 h-3 rounded-full bg-white opacity-50" data-index="4"></div> <div class="w-3 h-3 rounded-full bg-white opacity-50" data-index="5"></div> </div> </div> </div>  <div class="relative w-full"> <div class="bg-[var(--color-green)] relative w-full top-[-40px] -z-10 overflow-hidden"> <div class="max-w-screen-xl mx-auto px-6 md:px-20 pt-20 pb-40"> <!-- CONTENU --> <div class="relative z-10"> <div class="w-20px h-20px mb-4"> ${renderComponent($$result2, "IconPlanet", IconPlanet, {})} </div> <!-- TEXT --> <div class="pt-4"> <h2 class="h2-header text-white">
Tout les pays dans un seul lieu !
</h2> <div> <span class="flex h-[4px] w-50 bg-[var(--color-orange)] my-5"></span> </div> <p class="text-white">
Découvrez la culture culinaire du monde entier à travers de les
              nombreuses fonctionnalités que notre site propose !
</p> <!-- icones --> <div class="grid grid-cols-2 lg:grid-cols-11 pt-13 gap-4"> <!-- Icono 1: Partager vos opinions --> <div class="col-span-1 lg:col-span-3 flex flex-col justify-center items-start"> ${renderComponent($$result2, "IconBulle", IconBulle, {})} <p class="uppercase text-left text-white pt-3">
Partager vos opinions
</p> </div> <!-- Icono 2: Trouver vos boutiques favoris --> <div class="col-span-1 lg:col-span-3 flex flex-col justify-center items-start"> ${renderComponent($$result2, "IconMap", IconMap, {})} <p class="uppercase text-left text-white pt-3">
Trouver vos boutiques favoris
</p> </div> <!-- Espacio vacío SOLO para desktop --> <div class="hidden lg:block lg:col-span-5"></div> <!-- Icono 3: Delicieuses recettes --> <div class="col-span-1 lg:col-span-3 flex flex-col justify-center items-start"> ${renderComponent($$result2, "Iconfood1", Iconfood1, {})} <p class="uppercase text-left text-white pt-3">
Delicieuses recettes !
</p> </div> <!-- Icono 4: Devenir partenaire --> <div class="col-span-1 lg:col-span-3 flex flex-col justify-center items-start"> ${renderComponent($$result2, "IconUser", IconUser, {})} <p class="uppercase text-left text-white pt-3">
Devenir<br>partenaire
</p> </div> </div> <!-- button --> <div class="text-sm flex lg:flex-nowrap justify-center pt-10"> ${renderComponent($$result2, "Button", $$Button, { "class": "pt-10", "variant": "lin", "href": "/", "classes": "px-10 py-3" }, { "default": ($$result3) => renderTemplate`
DÉCOUVREZ VOS PRODUITS !
` })} </div> </div> </div> <img src="/src/assets/img/foodBK.webp" alt="Vegetales de fondo" class="md:block absolute bottom-0 right-0 lg:w-1/2 lg:h-auto object-cover" loading="lazy"> </div> </div> </div>  <div class="max-w-screen-xl mx-auto px-6 md:px-20 py-20"> <div class="flex flex-col justify-center items-center text-center mb-12"> <h2 class="h2-header uppercase">et encore plus !</h2> <span class="flex h-[8px] w-50 bg-[var(--color-orange)] my-5"></span> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <article> ${renderComponent($$result2, "CardLP", $$CardLP, { "bgColor": "var(--color-orange)", "href": "/newsletter" }, { "button": ($$result3) => renderTemplate`<div> ${renderComponent($$result3, "Button", $$Button, { "variant": "lin", "href": "/newsletter" }, { "default": ($$result4) => renderTemplate`CLIQUEZ ICI` })} </div>`, "description": ($$result3) => renderTemplate`<span>
Abonnez-vous à notre newsletter pour découvrir nos nouveautés, 
            offres exclusives et inspirations directement dans votre boîte mail.
</span>`, "image": ($$result3) => renderTemplate`${renderComponent($$result3, "Picture", $$Picture, { "slot": "image", "src": ImageLettre, "alt": "Newsletter", "class": "lg:w-100 lg:h-70 -z-20 w-100 h-80" })}`, "title": ($$result3) => renderTemplate`<span>NEWSLETTER</span>` })} </article> <article> ${renderComponent($$result2, "CardLP", $$CardLP, { "bgColor": "var(--color-orange)", "href": "/partenaire" }, { "button": ($$result3) => renderTemplate`<div> ${renderComponent($$result3, "Button", $$Button, { "variant": "lin", "href": "/partenaire" }, { "default": ($$result4) => renderTemplate`CLIQUEZ ICI` })} </div>`, "description": ($$result3) => renderTemplate`<span>
Découvrez comment collaborer avec nous pour donner plus d'ampleur à nos projets !
</span>`, "image": ($$result3) => renderTemplate`${renderComponent($$result3, "Picture", $$Picture, { "slot": "image", "src": ImageMains, "alt": "Devenir partenaire", "class": "lg:w-100 lg:h-80 pr-4 object-cover" })}`, "title": ($$result3) => renderTemplate`<span>Devenir partenaire</span>` })} </article> <article> ${renderComponent($$result2, "CardLP", $$CardLP, { "bgColor": "var(--color-orange)", "href": "/soutenir" }, { "button": ($$result3) => renderTemplate`<div> ${renderComponent($$result3, "Button", $$Button, { "variant": "lin", "href": "/soutenir" }, { "default": ($$result4) => renderTemplate`CLIQUEZ ICI` })} </div>`, "description": ($$result3) => renderTemplate`<span>
Soutenez notre projet et participez à son développement ! 
            Chaque contribution compte pour nous aider à grandir !
</span>`, "image": ($$result3) => renderTemplate`${renderComponent($$result3, "Picture", $$Picture, { "slot": "image", "src": ImageSoutien, "alt": "Nous soutenir", "class": "lg:w-100 lg:h-70 -z-10 object-cover" })}`, "title": ($$result3) => renderTemplate`<span>Nous soutenir !</span>` })} </article> <article> ${renderComponent($$result2, "CardLP", $$CardLP, { "bgColor": "var(--color-green)", "href": "/recettes" }, { "button": ($$result3) => renderTemplate`<div> ${renderComponent($$result3, "Button", $$Button, { "variant": "lin", "href": "/recettes" }, { "default": ($$result4) => renderTemplate`CLIQUEZ ICI` })} </div>`, "description": ($$result3) => renderTemplate`<span>
Découvrez nos délicieuses recettes du monde entier ! 
            Des plats authentiques pour voyager depuis votre cuisine.
</span>`, "image": ($$result3) => renderTemplate`${renderComponent($$result3, "Picture", $$Picture, { "slot": "image", "src": ImageRecette, "alt": "Recettes \xD1ummy", "class": "lg:w-100 lg:h-68 object-cover" })}`, "title": ($$result3) => renderTemplate`<span>Recettes Ñummy!</span>` })} </article> </div> </div> ` })} <!-- script --> ${renderScript($$result, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/index.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

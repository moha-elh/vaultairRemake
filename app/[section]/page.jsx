import Home from "../page";
import { SECTIONS } from "../sections";

export const dynamicParams = false;
export const generateStaticParams = () => SECTIONS.map((section) => ({ section }));

export default Home;

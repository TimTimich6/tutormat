import TopBar from "./TopBar.js";
import cs from './Layout.module.css'
const Layout = (props) => {
    return (<>
    <TopBar/>
    <div className={cs.main}>{props.children}</div>
    </>);
}
 
export default Layout;
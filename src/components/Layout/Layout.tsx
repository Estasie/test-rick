import React, {FC} from 'react'
import PropTypes from 'prop-types'
interface ILayoutProps{
    component: JSX.Element;
}
const Layout: FC<ILayoutProps> = (props) => {
    const {component} = props;
  return (
    <main className={"p-4 m-12 bg-main"}>
        {component}
    </main>
  )
}


export default Layout
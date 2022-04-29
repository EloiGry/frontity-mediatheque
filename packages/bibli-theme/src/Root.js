import React from "react"
import { connect, Global, css } from "frontity"
import NavBar from "./components/NavBar"
import Livres from "./pages/Livres"
import Acceuil from "./pages/Acceuil"
import Dvds from "./pages/Dvds"
import Cds from "./pages/Cds"
import { useEffect } from 'react'
import Livre from "./pages/Livre"
import Cd from "./pages/Cd"
import Dvd from "./pages/Dvd"


const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link)
    useEffect(() => {
      fetching()
    }, [])

    const fetching = async () => {
      await actions.source.fetch('/livres')
      await actions.source.fetch('/cds')
      await actions.source.fetch('/dvds')
    }
    
  return (
    <>
      <Global
      styles={css`
            * {
              font-family: system-ui, Verdana, Arial, sans-serif;
              margin: 0;
              padding: 0;
              border: 0;
	            vertical-align: baseline;
            }
      `}/>
          <NavBar/>
              { data.isFetching && <p> Loading... </p>}
              { data.isHome && <Acceuil/>}
              { data.isLivreArchive && <Livres/>}
              {data.isLivre && <Livre/>}
              { data.isDvdArchive && <Dvds/>}
              {data.isDvd && <Dvd/>}
              { data.isCdArchive && <Cds/>}
              {data.isCd && <Cd/>}
              { data.isError && <p> 404 not Found </p>}
    </>

  )
}


export default connect(Root)
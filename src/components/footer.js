import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Fade } from "react-reveal"



export default () => (
  <StaticQuery query={ graphql`
    query{
        sanityCompanyInfo {
            companyname
            licenses
            logo {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
              }
            }
        }
        allSanityBadges{
          edges {
            node {
              badge_img {
                asset {
                  fluid {
                    src
                  }
                }
              }
              badge_name
            }
          }
        }
      }
    `}

    render={data => (
    <footer className="footer">
       <div className="badgeBanner">
          <div className="columns">
            {/* <Fade bottom cascade> */}
              <div className="badges">
                {data.allSanityBadges.edges.map(({ node: badge }) => (
                    <Image fluid={badge.badge_img.asset.fluid} key={badge.badge_name}/>
                  ))}
              </div>     
              {/* </Fade> */}
                  </div>
                </div>
              <div className="licenses">
                  {data.sanityCompanyInfo.licenses.map(( license  => 
                    <div>{license}</div>
                  ))}
              </div>
        <div className="container">
        <Image fluid={data.sanityCompanyInfo.logo.asset.fluid}
                  style={{ height: "auto", width: "200px" }}
                  className="align-center logo"
                  alt="Logo"
                />
          <p>&copy; {data.sanityCompanyInfo.companyname}</p> 
          
        </div>
        
      </footer>
        )}
        />
      )
      



         
            
            
            
            
            

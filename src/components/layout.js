/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Helmet from 'react-helmet'
import Image from "gatsby-image"
import "./layout.css"
import { FaCalendarAlt, FaPhone } from 'react-icons/fa'
import $ from "jquery"
import ConversionLoggingInit from '../util/conversionLogging.js';



ConversionLoggingInit.init({env: 'prod'});



const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery($slug: String) {
      site {
        siteMetadata {
          title
        }
      }
      sanityCompanyInfo {
        companyname
        phone
        licenses
        logo{
          asset{
            fluid{
              ...GatsbySanityImageFluid
              src
            }
          }
        }
        favicon{
          asset{
            fluid{
              ...GatsbySanityImageFluid
              src
            }
          }
        }
        primarycolor{
          hex
      }
      secondarycolor{
          hex
      }
      accentcolor{
          hex
      }
        analytics
        marchex
        remarketing
        tagmanager
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
      sanityPages(slug: {current: {eq: $slug}}) {
            pagetitle
            slug{
              current
            }
            coupon{
              title
              type
            }
            serviceimage{
                asset{
                    fluid(maxWidth: 1920){
                        ...GatsbySanityImageFluid
                        src
                    }
                }
            }
            headerimage{
                asset{
                    fluid(maxWidth: 1920){
                        ...GatsbySanityImageFluid
                        src
                    }
                }
            }
        }
    }
  `)


  function changeActive(){
    $(".form").toggleClass("expanded");
    $('body').toggleClass('formExpanded');
  }  

  return (
    <>
    
    <Helmet>

         <script
        src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="twitter:card" content="summary" />

        <meta property="og:image" content={data.sanityPages.headerimage.asset.fluid.src} />
        <meta property="og:title" content={data.sanityCompanyInfo.companyname + " | " + data.sanityPages.pagetitle} />
        <link rel="icon" type="image/png" href={data.sanityCompanyInfo.favicon.asset.fluid.src} sizes="16x16"/>   
          

          <meta name="theme-color" content={data.sanityCompanyInfo.secondarycolor.hex} />
              <style>{`
                    .pageHeader h1, h1, h2, h3, h4, h5, h6{
                      color:  ${data.sanityCompanyInfo.primarycolor.hex } !important; 
                    }
                    `}
                  </style>

                  <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${data.sanityCompanyInfo.tagmanager}');`}</script>
                    
      </Helmet>
      <noscript>
   <a href='https://www.clickcease.com' rel='nofollow'><img src='https://monitor.clickcease.com/stats/stats.aspx' alt='ClickCease'/></a>
   </noscript>
   <noscript><iframe src={"https://www.googletagmanager.com/ns.html?id=" + data.sanityCompanyInfo.tagmanager} height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
    <div className="pagewrapper" >
   <Header />
          <div>
            <main>{children}</main>
            <Footer />
          </div>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout

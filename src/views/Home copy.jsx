import React from 'react'
import {useNavigate , Link} from 'react-router-dom'
function Home({login}) {
    let navigate = useNavigate()
  return (
    <div>

      <div hidden="" id="sprite-plyr">
          
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol id="plyr-airplay" viewBox="0 0 18 18"><path d="M16 1H2a1 1 0 00-1 1v10a1 1 0 001 1h3v-2H3V3h12v8h-2v2h3a1 1 0 001-1V2a1 1 0 00-1-1z"></path><path d="M4 17h10l-5-6z"></path></symbol><symbol id="plyr-captions-off" viewBox="0 0 18 18"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fill-rule="evenodd" fill-opacity=".5"></path></symbol><symbol id="plyr-captions-on" viewBox="0 0 18 18"><path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fill-rule="evenodd"></path></symbol><symbol id="plyr-download" viewBox="0 0 18 18"><path d="M9 13c.3 0 .5-.1.7-.3L15.4 7 14 5.6l-4 4V1H8v8.6l-4-4L2.6 7l5.7 5.7c.2.2.4.3.7.3zm-7 2h14v2H2z"></path></symbol><symbol id="plyr-enter-fullscreen" viewBox="0 0 18 18"><path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"></path></symbol><symbol id="plyr-exit-fullscreen" viewBox="0 0 18 18"><path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"></path></symbol><symbol id="plyr-fast-forward" viewBox="0 0 18 18"><path d="M7.875 7.171L0 1v16l7.875-6.171V17L18 9 7.875 1z"></path></symbol><symbol id="plyr-logo-vimeo" viewBox="0 0 18 18"><path d="M17 5.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C5 10.9 4.4 6 3 6c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z"></path></symbol><symbol id="plyr-logo-youtube" viewBox="0 0 18 18"><path d="M16.8 5.8c-.2-1.3-.8-2.2-2.2-2.4C12.4 3 9 3 9 3s-3.4 0-5.6.4C2 3.6 1.3 4.5 1.2 5.8 1 7.1 1 9 1 9s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4C5.6 15 9 15 9 15s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2zM7 12V6l5 3-5 3z"></path></symbol><symbol id="plyr-muted" viewBox="0 0 18 18"><path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></symbol><symbol id="plyr-pause" viewBox="0 0 18 18"><path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"></path></symbol><symbol id="plyr-pip" viewBox="0 0 18 18"><path d="M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z"></path><path d="M13 15H3V5h5V3H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-6h-2v5z"></path></symbol><symbol id="plyr-play" viewBox="0 0 18 18"><path d="M15.562 8.1L3.87.225c-.818-.562-1.87 0-1.87.9v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"></path></symbol><symbol id="plyr-restart" viewBox="0 0 18 18"><path d="M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z"></path></symbol><symbol id="plyr-rewind" viewBox="0 0 18 18"><path d="M10.125 1L0 9l10.125 8v-6.171L18 17V1l-7.875 6.171z"></path></symbol><symbol id="plyr-settings" viewBox="0 0 18 18"><path d="M16.135 7.784a2 2 0 01-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 01-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 01-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 01-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 011.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 012.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 012.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 011.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997zM9 12a3 3 0 110-6 3 3 0 010 6z"></path></symbol><symbol id="plyr-volume" viewBox="0 0 18 18"><path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"></path><path d="M11.282 5.282a.909.909 0 000 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 000 1.316c.145.145.636.262 1.018.156a.725.725 0 00.298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 00-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path></symbol></svg>
      </div>

      <main>
          
          <div className="container">
              <div className="row g-4">

                  
                  <div className="col-lg-3">

                      
                      <div className="d-flex align-items-center d-lg-none">
                          <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                              <i className="btn btn-primary fw-bold fa-solid fa-sliders-h"></i>
                              <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
                          </button>
                      </div>
                      

                      
                      <nav className="navbar navbar-expand-lg mx-0">
                          <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
                              
                              <div className="offcanvas-header">
                                  <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                              </div>

                              
                              <div className="offcanvas-body d-block px-2 px-lg-0">
                                  
                                  <div className="card overflow-hidden">
                                      
                                      <div className="h-50px" style="background-image:url(themes_files/assets/images/bg/01.jpg); background-position: center; background-size: cover; background-repeat: no-repeat;"></div>
                                      
                                      <div className="card-body pt-0">
                                          <div className="text-center">
                                              
                                              <div className="avatar avatar-lg mt-n5 mb-3">
                                                  <Link to="https://social.webestica.com/index.html#!"><img className="avatar-img rounded border border-white border-3" src="./themes_files/assets/images/07.jpg" alt="" /></Link>
                                              </div>
                                              
                                              <h5 className="mb-0"> <Link to="https://social.webestica.com/index.html#!">Sam Lanson </Link> </h5>
                                              <small>Web Developer at Webestica</small>
                                              <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>

                                              
                                              <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                                  
                                                  <div>
                                                      <h6 className="mb-0">256</h6>
                                                      <small>Post</small>
                                                  </div>
                                                  
                                                  <div className="vr"></div>
                                                  
                                                  <div>
                                                      <h6 className="mb-0">2.5K</h6>
                                                      <small>Followers</small>
                                                  </div>
                                                  
                                                  <div className="vr"></div>
                                                  
                                                  <div>
                                                      <h6 className="mb-0">365</h6>
                                                      <small>Following</small>
                                                  </div>
                                              </div>
                                              
                                          </div>

                                          
                                          <hr />

                                          
                                          <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/my-profile.html"> <img className="me-2 h-20px fa-fw" src="./themes_files/assets/svg/home-outline-filled.svg" alt="" /><span>Feed </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/my-profile-connections.html"> <img className="me-2 h-20px fa-fw" src="./themes_files/assets/svg/person-outline-filled.svg" alt="" /><span>Connections </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/blog.html"> <img className="me-2 h-20px fa-fw" src="./themes_files/assets/svg/earth-outline-filled.svg" alt="" /><span>Latest News </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/events.html"> <img className="me-2 h-20px fa-fw" src="./themes_files/assets/svg/calendar-outline-filled.svg" alt="" /><span>Events </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/groups.html"> <img className="me-2 h-20px fa-fw" src="./themes_files/assets/svg/chat-outline-filled.svg" alt="" /><span>Groups </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/notifications.html"> <img className="me-2 h-20px fa-fw" src="./themes_files/assets/svg/notification-outlined-filled.svg" alt="" /><span>Notifications </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/settings.html"> <img className="me-2 h-20px fa-fw" src="./themes_files/assets/svg/cog-outline-filled.svg" alt="" /><span>Settings </span></Link>
                                              </li>
                                          </ul>
                                          
                                      </div>
                                      
                                      
                                      <div className="card-footer text-center py-2">
                                          <Link className="btn btn-link btn-sm" to="https://social.webestica.com/my-profile.html">View Profile </Link>
                                      </div>
                                  </div>
                                  

                                  
                                  <ul className="nav small mt-4 justify-content-center lh-1">
                                      <li className="nav-item">
                                          <Link className="nav-link" to="https://social.webestica.com/my-profile-about.html">About</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="https://social.webestica.com/settings.html">Settings</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" target="_blank" to="https://support.webestica.com/login">Support </Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" target="_blank" to="https://social.webestica.com/docs/index.html">Docs </Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="https://social.webestica.com/help.html">Help</Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link className="nav-link" to="https://social.webestica.com/privacy-and-terms.html">Privacy &amp; terms</Link>
                                      </li>
                                  </ul>
                                  
                                  
                                  <p className="small text-center mt-1">©2022 <Link className="text-body" target="_blank" to="https://www.webestica.com/"> Webestica </Link></p>
                              </div>
                          </div>
                      </nav>
                      
                  </div>
                  

                  
                  <div className="col-md-8 col-lg-6 vstack gap-4">
                      
                      <div className="tiny-slider arrow-hover overflow-hidden">
                          <div className="tns-outer" id="tns1-ow">
                              <div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">1 to 5</span> of 6</div>
                              <div id="tns1-mw" className="tns-ovh">
                                  <div className="tns-inner" id="tns1-iws">
                                      <div className="tiny-slider-inner ms-n4  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" data-arrow="true" data-dots="true" data-loop="false" data-autoplay="false" data-items-xl="4" data-items-lg="3" data-items-md="3" data-items-sm="3" data-items-xs="2"
                                          data-gutter="12" data-edge="30" id="tns1" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                          
                                          <div className="tns-item tns-slide-active" id="tns1-item0">
                                              
                                              <div className="card border border-2 border-dashed h-150px shadow-none d-flex align-items-center justify-content-center text-center" style="min-width: 100px;">
                                                  <div>
                                                      <Link className="stretched-link btn btn-light rounded-circle icon-md " to="https://social.webestica.com/index.html#! " style="border: #bb9439 1px dashed; ">
                                                          <i className="fa-solid fa-plus " style="color:#bb9439; "></i>
                                                      </Link>
                                                      <h6 className="mt-2 mb-0 small ">Post a Story</h6>
                                                  </div>
                                              </div>
                                              
                                          </div>

                                          
                                          <div className="tns-item tns-slide-active " id="tns1-item1 ">
                                              
                                              <div className="card card-overlay-bottom border-0 position-relative h-150px " style="min-width: 100px;background-image:url(./themes_files/assets/images/post/1by1/02.jpg); background-position: center left;
                                                  background-size: cover; ">
                                                  <div className="card-img-overlay d-flex align-items-center p-2 ">
                                                      <div className="w-100 mt-auto ">
                                                          
                                                          <Link to="https://social.webestica.com/index.html#! " className="stretched-link text-white small ">Judy Nguyen</Link>
                                                      </div>
                                                  </div>
                                              </div>
                                              
                                          </div>

                                          
                                          <div className="tns-item tns-slide-active " id="tns1-item2 ">
                                              
                                              <div className="card card-overlay-bottom border-0 position-relative h-150px " style="min-width: 100px;background-image:url(./themes_files/assets/images/post/1by1/03.jpg); background-position: center left;
                                                  background-size: cover; ">
                                                  <div className="card-img-overlay d-flex align-items-center p-2 ">
                                                      <div className="w-100 mt-auto ">
                                                          
                                                          <Link to="https://social.webestica.com/index.html#! " className="stretched-link text-white small ">Samuel Bishop</Link>
                                                      </div>
                                                  </div>
                                              </div>
                                              
                                          </div>

                                          
                                          <div className="tns-item tns-slide-active " id="tns1-item3 ">
                                              
                                              <div className="card card-overlay-bottom border-0 position-relative h-150px " style="min-width: 100px;background-image:url(themes_files/assets/images/post/1by1/04.jpg); background-position: center left; background-size:
                                                  cover; ">
                                                  <div className="card-img-overlay d-flex align-items-center p-2 ">
                                                      <div className="w-100 mt-auto ">
                                                          
                                                          <Link to="https://social.webestica.com/index.html#! " className="stretched-link text-white small ">Carolyn Ortiz</Link>
                                                      </div>
                                                  </div>
                                              </div>
                                              
                                          </div>

                                          
                                          <div className="tns-item tns-slide-active " id="tns1-item4 ">
                                              
                                              <div className="card card-overlay-bottom border-0 position-relative h-150px " style="min-width: 100px;background-image:url(themes_files/assets/images/post/1by1/05.jpg); background-position: center left; background-size:
                                                  cover; ">
                                                  <div className="card-img-overlay d-flex align-items-center p-2 ">
                                                      <div className="w-100 mt-auto ">
                                                          
                                                          <Link to="https://social.webestica.com/index.html#! " className="stretched-link text-white small ">Amanda Reed</Link>
                                                      </div>
                                                  </div>
                                              </div>
                                              
                                          </div>

                                          
                                          <div className="tns-item " id="tns1-item5 " aria-hidden="true " tabindex="-1 ">
                                              
                                              <div className="card card-overlay-bottom border-0 position-relative h-150px " style="min-width: 100px;background-image:url(themes_files/assets/images/post/1by1/01.jpg); background-position: center left; background-size:
                                                  cover; ">
                                                  <div className="card-img-overlay d-flex align-items-center p-2 ">
                                                      <div className="w-100 mt-auto ">
                                                          
                                                          <Link to="https://social.webestica.com/index.html#! " className="stretched-link text-white small ">Lori Stevens</Link>
                                                      </div>
                                                  </div>
                                              </div>
                                              
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tns-nav " aria-label="Carousel Pagination "><button type="button " data-nav="0 " aria-controls="tns1 " style=" " aria-label="Carousel Page 1 (Current Slide) " className="tns-nav-active "></button>
                                  <button type="button " data-nav="1 " tabindex="-1 " aria-controls="tns1 " style=" " aria-label="Carousel Page 2 "></button>
                                  <button type="button " data-nav="2 " tabindex="-1 " aria-controls="tns1 " style="display:none " aria-label="Carousel Page 3 "></button><button type="button " data-nav="3 " tabindex="-1 " aria-controls="tns1
                                                  " style="display:none " aria-label="Carousel Page 4 "></button>
                                  <button type="button " data-nav="4 " tabindex="-1 " aria-controls="tns1 " style="display:none " aria-label="Carousel Page 5 "></button><button type="button " data-nav="5 " tabindex="-1 " aria-controls="tns1
                                                  " style="display:none " aria-label="Carousel Page 6 "></button>
                              </div>
                          </div>
                      </div>
                      

                      
                      <div className="card card-body ">
                          <div className="d-flex mb-3 ">
                              
                              <div className="avatar avatar-xs me-2 ">
                                  <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/03.jpg " alt=" " /> </Link>
                              </div>
                              
                              <form className="w-100 ">
                                  <textarea className="form-control pe-4 border-dashed " rows="2 " data-autoresize=" " placeholder="Share your thoughts... "></textarea>
                              </form>
                          </div>
                          
                          <ul className="nav nav-pills nav-stack small fw-normal ">
                              <li className="nav-item ">
                                  <Link className="nav-link bg-light py-1 px-2 mb-0 border " to="https://social.webestica.com/index.html#! " data-bs-toggle="modal " data-bs-target="#feedActionPhoto "> <i className="bi bi-image-fill text-success pe-2 "></i>Photo</Link>
                              </li>
                              <li className="nav-item ">
                                  <Link className="nav-link bg-light py-1 px-2 mb-0 border " to="https://social.webestica.com/index.html#! " data-bs-toggle="modal " data-bs-target="#feedActionVideo "> <i className="bi bi-camera-reels-fill text-info pe-2 "></i>Video</Link>
                              </li>
                              <li className="nav-item ">
                                  <Link to="https://social.webestica.com/index.html# " className="nav-link bg-light py-1 px-2 mb-0 border " data-bs-toggle="modal " data-bs-target="#modalCreateEvents "> <i className="bi bi-calendar2-event-fill text-danger pe-2 "></i>Event </Link>
                              </li>
                              <li className="nav-item ">
                                  <Link className="nav-link bg-light py-1 px-2 mb-0 border " to="https://social.webestica.com/index.html#! " data-bs-toggle="modal " data-bs-target="#modalCreateFeed "> <i className="bi bi-emoji-smile-fill text-warning pe-2 "></i>Feeling /Activity</Link>
                              </li>
                              <li className="nav-item dropdown ms-lg-auto ">
                                  <Link className="nav-link bg-light py-1 px-2 mb-0 border " to="https://social.webestica.com/index.html# " id="feedActionShare " data-bs-toggle="dropdown " aria-expanded="false ">
                                      <i className="bi bi-three-dots "></i>
                                  </Link>
                                  
                                  <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="feedActionShare ">
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Create a poll</Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Ask a question </Link>
                                      </li>
                                      <li>
                                          <hr className="dropdown-divider " />
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Help</Link>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                          
                      </div>
                      

                      
                      <div className="card ">
                          
                          <div className="card-header border-0 pb-0 ">
                              <div className="d-flex align-items-center justify-content-between ">
                                  <div className="d-flex align-items-center ">
                                      
                                      <div className="avatar avatar-story me-2 ">
                                          <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/04.jpg " alt=" " /> </Link>
                                      </div>
                                      
                                      <div>
                                          <div className="nav nav-divider ">
                                              <h6 className="nav-item card-title mb-0 "> <Link to="https://social.webestica.com/index.html#! "> Lori Ferguson </Link></h6>
                                              <span className="nav-item small "> 2hr</span>
                                          </div>
                                          <p className="mb-0 small ">Web Developer at Webestica</p>
                                      </div>
                                  </div>
                                  
                                  <div className="dropdown ">
                                      <Link to="# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardFeedAction " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-three-dots "></i>
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardFeedAction ">
                                          <li>
                                              <Link className="dropdown-item " to="# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                                          </li>
                                      </ul>
                                  </div>
                                  
                              </div>
                          </div>
                          
                          
                          <div className="card-body ">
                              <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                              
                              <img className="card-img " src="./themes_files/assets/images/01(1).jpg " alt="Post " />
                              
                              <ul className="nav nav-stack py-3 small ">
                                  <li className="nav-item ">
                                      <Link className="nav-link active " to="https://social.webestica.com/index.html#! "> <i className="bi bi-hand-thumbs-up-fill pe-1 "></i>Liked (56)</Link>
                                  </li>
                                  <li className="nav-item ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> <i className="bi bi-chat-fill pe-1 "></i>Comments (12)</Link>
                                  </li>
                                  
                                  <li className="nav-item dropdown ms-sm-auto ">
                                      <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html# " id="cardShareAction " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-reply-fill flip-horizontal ps-1 "></i>Share (3)
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Send via Direct Message</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Bookmark </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-link fa-fw pe-2 "></i>Copy link to post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-share fa-fw pe-2 "></i>Share post via …</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Share to News Feed</Link>
                                          </li>
                                      </ul>
                                  </li>
                                  
                              </ul>
                              

                              
                              <div className="d-flex mb-3 ">
                                  
                                  <div className="avatar avatar-xs me-2 ">
                                      <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/12.jpg " alt=" " /> </Link>
                                  </div>
                                  
                                  <form className="w-100 ">
                                      <textarea data-autoresize=" " className="form-control pe-4 bg-light " rows="1 " placeholder="Add a comment... "></textarea>
                                  </form>
                              </div>
                              
                              <ul className="comment-wrap list-unstyled ">
                                  
                                  <li className="comment-item ">
                                      <div className="d-flex position-relative ">
                                          
                                          <div className="avatar avatar-xs ">
                                              <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/05.jpg " alt=" " /></Link>
                                          </div>
                                          <div className="ms-2 ">
                                              
                                              <div className="bg-light rounded-start-top-0 p-3 rounded ">
                                                  <div className="d-flex justify-content-between ">
                                                      <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Frances Guerrero </Link></h6>
                                                      <small className="ms-2 ">5hr</small>
                                                  </div>
                                                  <p className="small mb-0 ">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                              </div>
                                              
                                              <ul className="nav nav-divider py-2 small ">
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (3)</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> View 5 replies</Link>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      
                                      <ul className="comment-item-nested list-unstyled ">
                                          
                                          <li className="comment-item ">
                                              <div className="d-flex ">
                                                  
                                                  <div className="avatar avatar-xs ">
                                                      <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/06.jpg " alt=" " /></Link>
                                                  </div>
                                                  
                                                  <div className="ms-2 ">
                                                      <div className="bg-light p-3 rounded ">
                                                          <div className="d-flex justify-content-between ">
                                                              <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Lori Stevens </Link> </h6>
                                                              <small className="ms-2 ">2hr</small>
                                                          </div>
                                                          <p className="small mb-0 ">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                                      </div>
                                                      
                                                      <ul className="nav nav-divider py-2 small ">
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (5)</Link>
                                                          </li>
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </li>
                                          
                                          
                                          <li className="comment-item ">
                                              <div className="d-flex ">
                                                  
                                                  <div className="avatar avatar-story avatar-xs ">
                                                      <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/07.jpg " alt=" " /></Link>
                                                  </div>
                                                  
                                                  <div className="ms-2 ">
                                                      <div className="bg-light p-3 rounded ">
                                                          <div className="d-flex justify-content-between ">
                                                              <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Billy Vasquez </Link> </h6>
                                                              <small className="ms-2 ">15min</small>
                                                          </div>
                                                          <p className="small mb-0 ">Wishing calling is warrant settled was lucky.</p>
                                                      </div>
                                                      
                                                      <ul className="nav nav-divider py-2 small ">
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like</Link>
                                                          </li>
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </li>
                                          
                                      </ul>
                                      
                                      <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5 " data-bs-toggle="button " aria-pressed="true ">
                                          <div className="spinner-dots me-2 ">
                                              <span className="spinner-dot "></span>
                                              <span className="spinner-dot "></span>
                                              <span className="spinner-dot "></span>
                                          </div>
                                          Load more replies
                                      </Link>
                                      
                                  </li>
                                  
                                  
                                  <li className="comment-item ">
                                      <div className="d-flex ">
                                          
                                          <div className="avatar avatar-xs ">
                                              <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/05.jpg " alt=" " /></Link>
                                          </div>
                                          
                                          <div className="ms-2 ">
                                              <div className="bg-light p-3 rounded ">
                                                  <div className="d-flex justify-content-between ">
                                                      <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Frances Guerrero </Link> </h6>
                                                      <small className="ms-2 ">4min</small>
                                                  </div>
                                                  <p className="small mb-0 ">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                              </div>
                                              
                                              <ul className="nav nav-divider pt-2 small ">
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (1)</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> View 6 replies</Link>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </li>
                                  
                              </ul>
                              
                          </div>
                          
                          
                          <div className="card-footer border-0 pt-0 ">
                              
                              <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center " data-bs-toggle="button " aria-pressed="true ">
                                  <div className="spinner-dots me-2 ">
                                      <span className="spinner-dot "></span>
                                      <span className="spinner-dot "></span>
                                      <span className="spinner-dot "></span>
                                  </div>
                                  Load more comments
                              </Link>
                          </div>
                          
                      </div>
                      

                      
                      <div className="card ">
                          
                          <div className="card-header ">
                              <div className="d-flex align-items-center justify-content-between ">
                                  <div className="d-flex align-items-center ">
                                      
                                      <div className="avatar me-2 ">
                                          <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/12.svg " alt=" " /> </Link>
                                      </div>
                                      
                                      <div>
                                          <h6 className="card-title mb-0 "><Link to="https://social.webestica.com/index.html#! "> Bootstrap: Front-end framework </Link></h6>
                                          <Link to="https://social.webestica.com/index.html#! " className="mb-0 text-body ">Sponsored <i className="bi bi-info-circle ps-1 " data-bs-container="body " data-bs-toggle="popover " data-bs-placement="top
                                                  " data-bs-content="You&#39;re seeing this ad because your activity meets the intended audience of our site. " data-bs-original-title=" " title=" "></i> </Link>
                                      </div>
                                  </div>
                                  
                                  <div className="dropdown ">
                                      <Link to="https://social.webestica.com/index.html# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardShareAction2 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-three-dots "></i>
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction2 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                                          </li>
                                      </ul>
                                  </div>
                                  
                              </div>
                          </div>
                          

                          
                          <div className="card-body ">
                              <p className="mb-0 ">Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
                          </div>
                          <img src="./themes_files/assets/images/02(1).jpg " alt=" " />
                          
                          
                          <div className="card-footer border-0 d-flex justify-content-between align-items-center ">
                              <p className="mb-0 ">Currently v5.1.3 </p>
                              <Link className="btn btn-primary-soft btn-sm " to="https://social.webestica.com/index.html# "> Download now </Link>
                          </div>
                          

                      </div>
                      

                      
                      <div className="card ">
                          
                          <div className="card-header border-0 pb-0 ">
                              <div className="d-flex align-items-center justify-content-between ">
                                  <div className="d-flex align-items-center ">
                                      
                                      <div className="avatar me-2 ">
                                          <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/04.jpg " alt=" " /> </Link>
                                      </div>
                                      
                                      <div>
                                          <h6 className="card-title mb-0 "> <Link to="https://social.webestica.com/index.html# "> Judy Nguyen </Link></h6>
                                          <div className="nav nav-divider ">
                                              <p className="nav-item mb-0 small ">Web Developer at Webestica</p>
                                              <span className="nav-item small " data-bs-toggle="tooltip " data-bs-placement="top " title=" " data-bs-original-title="Public "> <i className="bi bi-globe "></i> </span>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="dropdown ">
                                      <Link to="https://social.webestica.com/index.html# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardShareAction3 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-three-dots "></i>
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction3 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                                          </li>
                                      </ul>
                                  </div>
                                  
                              </div>
                          </div>
                          
                          
                          <div className="card-body ">
                              <p>I'm so privileged to be involved in the <Link to="https://social.webestica.com/index.html#!
                                                  ">@bootstrap </Link>hiring process! Interviewing with their team was fun and I hope this can be a valuable resource for folks! <Link to="https://social.webestica.com/index.html#! "> #inclusivebusiness</Link>
                                  <Link to="https://social.webestica.com/index.html#! "> #internship</Link> <Link to="https://social.webestica.com/index.html#! "> #hiring</Link> <Link to="https://social.webestica.com/index.html# "> #apply </Link></p>
                              
                              <div className="d-flex justify-content-between ">
                                  <div className="row g-3 ">
                                      <div className="col-6 ">
                                          
                                          <Link className="h-100 " to="./themes_files/assets/images/03(1).jpg " data-glightbox=" " data-gallery="image-popup ">
                                              <img className="rounded img-fluid " src="./themes_files/assets/images/03(1).jpg " alt="Image " />
                                          </Link>
                                      </div>
                                      <div className="col-6 ">
                                          
                                          <Link to="./themes_files/assets/images/01(1).jpg " data-glightbox=" " data-gallery="image-popup ">
                                              <img className="rounded img-fluid " src="./themes_files/assets/images/01(1).jpg " alt="Image " />
                                          </Link>
                                          
                                          <div className="position-relative bg-dark mt-3 rounded ">
                                              <div className="hover-actions-item position-absolute top-50 start-50 translate-middle z-index-9 ">
                                                  <Link className="btn btn-link text-white " to="https://social.webestica.com/index.html# "> View all </Link>
                                              </div>
                                              <Link to="./themes_files/assets/images/02(1).jpg " data-glightbox=" " data-gallery="image-popup ">
                                                  <img className="img-fluid opacity-50 rounded " src="./themes_files/assets/images/02(1).jpg " alt=" " />
                                              </Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              

                              
                              <ul className="nav nav-stack py-3 small ">
                                  <li className="nav-item ">
                                      <Link className="nav-link active text-secondary " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle "></i> Louis, Billy and 126 others </Link>
                                  </li>
                                  <li className="nav-item ms-sm-auto ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> <i className="bi bi-chat-fill pe-1 "></i>Comments (12)</Link>
                                  </li>
                              </ul>
                              

                              
                              <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-3 ">
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 active " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart pe-1 "></i>Liked (56)</Link>
                                  </li>
                                  
                                  <li className="nav-item dropdown ">
                                      <Link to="https://social.webestica.com/index.html# " className="nav-link mb-0 " id="cardShareAction4 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-reply-fill flip-horizontal ps-1 "></i>Share (3)
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction4 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Send via Direct Message</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Bookmark </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-link fa-fw pe-2 "></i>Copy link to post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-share fa-fw pe-2 "></i>Share post via …</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Share to News Feed</Link>
                                          </li>
                                      </ul>
                                  </li>
                                  
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html#! "> <i className="bi bi-send-fill pe-1 "></i>Send</Link>
                                  </li>
                              </ul>
                              

                              
                              <ul className="comment-wrap list-unstyled ">
                                  
                                  <li className="comment-item ">
                                      <div className="d-flex ">
                                          
                                          <div className="avatar avatar-xs ">
                                              <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/05.jpg " alt=" " /> </Link>
                                          </div>
                                          <div className="ms-2 ">
                                              
                                              <div className="bg-light rounded-start-top-0 p-3 rounded ">
                                                  <div className="d-flex justify-content-between ">
                                                      <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Frances Guerrero </Link></h6>
                                                      <small className="ms-2 ">5hr</small>
                                                  </div>
                                                  <p className="small mb-0 ">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                              </div>
                                              
                                              <ul className="nav nav-divider py-2 small ">
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (3)</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> View 5 replies</Link>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      
                                      <ul className="comment-item-nested list-unstyled ">
                                          
                                          <li className="comment-item ">
                                              <div className="d-flex ">
                                                  
                                                  <div className="avatar avatar-xs ">
                                                      <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/06.jpg " alt=" " /></Link>
                                                  </div>
                                                  
                                                  <div className="ms-2 ">
                                                      <div className="bg-light p-3 rounded ">
                                                          <div className="d-flex justify-content-between ">
                                                              <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Lori Stevens </Link> </h6>
                                                              <small className="ms-2 ">2hr</small>
                                                          </div>
                                                          <p className="small mb-0 ">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                                      </div>
                                                      
                                                      <ul className="nav nav-divider py-2 small ">
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (5)</Link>
                                                          </li>
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </li>
                                          
                                          
                                          <li className="comment-item ">
                                              <div className="d-flex ">
                                                  
                                                  <div className="avatar avatar-xs ">
                                                      <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/07.jpg " alt=" " /></Link>
                                                  </div>
                                                  
                                                  <div className="ms-2 ">
                                                      <div className="bg-light p-3 rounded ">
                                                          <div className="d-flex justify-content-between ">
                                                              <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Billy Vasquez </Link> </h6>
                                                              <small className="ms-2 ">15min</small>
                                                          </div>
                                                          <p className="small mb-0 ">Wishing calling is warrant settled was lucky.</p>
                                                      </div>
                                                      
                                                      <ul className="nav nav-divider py-2 small ">
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like</Link>
                                                          </li>
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                      
                                      <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5 " data-bs-toggle="button " aria-pressed="true ">
                                          <div className="spinner-dots me-2 ">
                                              <span className="spinner-dot "></span>
                                              <span className="spinner-dot "></span>
                                              <span className="spinner-dot "></span>
                                          </div>
                                          Load more replies
                                      </Link>
                                  </li>
                                  
                                  
                                  <li className="comment-item ">
                                      <div className="d-flex ">
                                          
                                          <div className="avatar avatar-xs ">
                                              <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/05.jpg " alt=" " /></Link>
                                          </div>
                                          
                                          <div className="ms-2 ">
                                              <div className="bg-light p-3 rounded ">
                                                  <div className="d-flex justify-content-center ">
                                                      <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Frances Guerrero </Link> </h6>
                                                      <small className="ms-2 ">4min</small>
                                                  </div>
                                                  <p className="small mb-0 ">Congratulations:)</p>
                                                  <div className="card p-2 border border-2 rounded mt-2 shadow-none ">
                                                      <img src="./themes_files/assets/images/12(1).svg " alt=" " />
                                                  </div>
                                              </div>
                                              
                                              <ul className="nav nav-divider pt-2 small ">
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (1)</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> View 6 replies</Link>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </li>
                                  
                              </ul>
                              
                          </div>
                          
                          
                          <div className="card-footer border-0 pt-0 ">
                              
                              <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center " data-bs-toggle="button " aria-pressed="true ">
                                  <div className="spinner-dots me-2 ">
                                      <span className="spinner-dot "></span>
                                      <span className="spinner-dot "></span>
                                      <span className="spinner-dot "></span>
                                  </div>
                                  Load more comments
                              </Link>
                          </div>
                          
                      </div>
                      

                      
                      <div className="card ">
                          
                          <div className="card-header border-0 pb-0 ">
                              <div className="d-flex align-items-center justify-content-between ">
                                  <div className="d-flex align-items-center ">
                                      
                                      <div className="avatar me-2 ">
                                          <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/13.svg " alt=" " /> </Link>
                                      </div>
                                      
                                      <div>
                                          <h6 className="card-title mb-0 "> <Link to="https://social.webestica.com/index.html#! "> Apple Education </Link></h6>
                                          <p className="mb-0 small ">9 November at 23:29</p>
                                      </div>
                                  </div>
                                  
                                  <Link to="https://social.webestica.com/index.html# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardShareAction5 " data-bs-toggle="dropdown " aria-expanded="false ">
                                      <i className="bi bi-three-dots "></i>
                                  </Link>
                                  
                                  <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction5 ">
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                                      </li>
                                      <li>
                                          <hr className="dropdown-divider " />
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                                      </li>
                                  </ul>
                              </div>
                              
                          </div>
                          

                          
                          <div className="card-body pb-0 ">
                              <p>Find out how you can save time in the classroom this year. Earn recognition while you learn new skills on iPad and Mac. Start recognition your first Apple Teacher badge today!</p>
                              
                              <ul className="nav nav-stack pb-2 small ">
                                  <li className="nav-item ">
                                      <Link className="nav-link active text-secondary " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle "></i> Louis, Billy and 126 others </Link>
                                  </li>
                                  <li className="nav-item ms-sm-auto ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> <i className="bi bi-chat-fill pe-1 "></i>Comments (12)</Link>
                                  </li>
                              </ul>
                              
                          </div>
                          
                          
                          <div className="card-footer py-3 ">
                              
                              <ul className="nav nav-fill nav-stack small ">
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 active " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart pe-1 "></i>Liked (56)</Link>
                                  </li>
                                  
                                  <li className="nav-item dropdown ">
                                      <Link to="https://social.webestica.com/index.html# " className="nav-link mb-0 " id="cardShareAction6 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-reply-fill flip-horizontal ps-1 "></i>Share (3)
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction6 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Send via Direct Message</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Bookmark </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-link fa-fw pe-2 "></i>Copy link to post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-share fa-fw pe-2 "></i>Share post via …</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Share to News Feed</Link>
                                          </li>
                                      </ul>
                                  </li>
                                  
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html#! "> <i className="bi bi-send-fill pe-1 "></i>Send</Link>
                                  </li>
                              </ul>
                              
                          </div>
                          
                      </div>
                      

                      
                      <div className="card ">
                          
                          <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0 ">
                              <h6 className="card-title mb-0 ">People you may know</h6>
                              <button className="btn btn-sm btn-primary-soft "> See all </button>
                          </div>
                          

                          
                          <div className="card-body ">
                              <div className="tiny-slider arrow-hover ">
                                  <div className="tns-outer " id="tns2-ow ">
                                      <div className="tns-liveregion tns-visually-hidden " aria-live="polite " aria-atomic="true ">slide <span className="current ">11 to 15</span> of 4</div>
                                      <div id="tns2-mw " className="tns-ovh ">
                                          <div className="tns-inner " id="tns2-iw ">
                                              <div className="tiny-slider-inner ms-n4 tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal " data-arrow="true " data-dots="false " data-items-xl="3 " data-items-lg="2 " data-items-md="2
                                                  " data-items-sm="2 " data-items-xs="1 " data-gutter="12 " data-edge="30 " id="tns2 " style="transform: translate3d(-61.1111%, 0px, 0px); ">
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-story avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/10.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                              <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/11.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                              <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/12.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Dennis Barrett </Link></h6>
                                                              <p className="mb-0 small lh-sm ">21 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/09.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Amanda Reed </Link></h6>
                                                              <p className="mb-0 small lh-sm ">50 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-story avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/10.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                              <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/11.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                              <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/12.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Dennis Barrett </Link></h6>
                                                              <p className="mb-0 small lh-sm ">21 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  
                                                  <div className="tns-item " id="tns2-item0 " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/09.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Amanda Reed </Link></h6>
                                                              <p className="mb-0 small lh-sm ">50 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item " id="tns2-item1 " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-story avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/10.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                              <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item " id="tns2-item2 " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/11.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                              <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-active " id="tns2-item3 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/12.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Dennis Barrett </Link></h6>
                                                              <p className="mb-0 small lh-sm ">21 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned tns-slide-active ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/09.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Amanda Reed </Link></h6>
                                                              <p className="mb-0 small lh-sm ">50 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned tns-slide-active ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-story avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/10.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                              <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned tns-slide-active ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/11.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                              <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned tns-slide-active ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/12.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Dennis Barrett </Link></h6>
                                                              <p className="mb-0 small lh-sm ">21 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/09.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Amanda Reed </Link></h6>
                                                              <p className="mb-0 small lh-sm ">50 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-story avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/10.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                              <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                                  <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                                      
                                                      <div className="card shadow-none text-center ">
                                                          
                                                          <div className="card-body p-2 pb-0 ">
                                                              <div className="avatar avatar-xl ">
                                                                  <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/11.jpg " alt=" " /></Link>
                                                              </div>
                                                              <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                              <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                                          </div>
                                                          
                                                          <div className="card-footer p-2 border-0 ">
                                                              <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                          </div>
                                                      </div>
                                                      
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="tns-controls " aria-label="Carousel Navigation " tabindex="0 "><button type="button " data-controls="prev " tabindex="-1 " aria-controls="tns2 "><i className="fa-solid fa-chevron-left
                                                  "></i></button><button type="button " data-controls="next " tabindex="-1 " aria-controls="tns2 "><i className="fa-solid fa-chevron-right "></i></button></div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                      

                      
                      <div className="card ">
                          
                          <div className="card-header border-0 pb-0 ">
                              <div className="d-flex align-items-center justify-content-between ">
                                  <div className="d-flex align-items-center ">
                                      
                                      <div className="avatar me-2 ">
                                          <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/04.jpg " alt=" " /> </Link>
                                      </div>
                                      
                                      <div>
                                          <h6 className="card-title mb-0 "> <Link to="https://social.webestica.com/index.html#! "> All in the Mind </Link></h6>
                                          <p className="mb-0 small ">9 November at 23:29</p>
                                      </div>
                                  </div>
                                  
                                  <Link to="https://social.webestica.com/index.html# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardShareAction7 " data-bs-toggle="dropdown " aria-expanded="false ">
                                      <i className="bi bi-three-dots "></i>
                                  </Link>
                                  
                                  <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction7 ">
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                                      </li>
                                      <li>
                                          <hr className="dropdown-divider " />
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                                      </li>
                                  </ul>
                              </div>
                              
                          </div>
                          

                          
                          <div className="card-body pb-0 ">
                              <p>How do you protect your business against cyber-crime?</p>
                              <div className="vstack gap-2 ">
                                  
                                  <div>
                                      <input type="radio " className="btn-check " name="poll " id="option " />
                                      <label className="btn btn-outline-primary w-100 " for="option ">We have cybersecurity insurance coverage</label>
                                  </div>
                                  
                                  <div>
                                      <input type="radio " className="btn-check " name="poll " id="option2 " />
                                      <label className="btn btn-outline-primary w-100 " for="option2 ">Our dedicated staff will protect us</label>
                                  </div>
                                  
                                  <div>
                                      <input type="radio " className="btn-check " name="poll " id="option3 " />
                                      <label className="btn btn-outline-primary w-100 " for="option3 ">We give regular training for best practices</label>
                                  </div>
                                  
                                  <div>
                                      <input type="radio " className="btn-check " name="poll " id="option4 " />
                                      <label className="btn btn-outline-primary w-100 " for="option4 ">Third-party vendor protection</label>
                                  </div>
                              </div>

                              
                              <ul className="nav nav-divider mt-2 mb-0 ">
                                  <li className="nav-item ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html# ">263 votes</Link>
                                  </li>
                                  <li className="nav-item ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html# ">2d left</Link>
                                  </li>
                              </ul>
                              

                              
                              <ul className="nav nav-stack pb-2 small mt-4 ">
                                  <li className="nav-item ">
                                      <Link className="nav-link active text-secondary " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle "></i> Louis, Billy and 126 others </Link>
                                  </li>
                                  <li className="nav-item ms-sm-auto ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> <i className="bi bi-chat-fill pe-1 "></i>Comments (12)</Link>
                                  </li>
                              </ul>
                              
                          </div>
                          
                          
                          <div className="card-footer py-3 ">
                              
                              <ul className="nav nav-fill nav-stack small ">
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 active " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart pe-1 "></i>Liked (56)</Link>
                                  </li>
                                  
                                  <li className="nav-item dropdown ">
                                      <Link to="https://social.webestica.com/index.html# " className="nav-link mb-0 " id="feedActionShare6 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-reply-fill flip-horizontal ps-1 "></i>Share (3)
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="feedActionShare6 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Send via Direct Message</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Bookmark </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-link fa-fw pe-2 "></i>Copy link to post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-share fa-fw pe-2 "></i>Share post via …</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Share to News Feed</Link>
                                          </li>
                                      </ul>
                                  </li>
                                  
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html#! "> <i className="bi bi-send-fill pe-1 "></i>Send</Link>
                                  </li>
                              </ul>
                              
                          </div>
                          
                      </div>
                      

                      
                      <div className="card ">
                          
                          <div className="card-header border-0 pb-0 ">
                              <div className="d-flex align-items-center justify-content-between ">
                                  <div className="d-flex align-items-center ">
                                      
                                      <div className="avatar me-2 ">
                                          <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/04.jpg " alt=" " /> </Link>
                                      </div>
                                      
                                      <div>
                                          <h6 className="card-title mb-0 "> <Link to="https://social.webestica.com/index.html#! "> All in the Mind </Link></h6>
                                          <p className="mb-0 small ">9 November at 23:29</p>
                                      </div>
                                  </div>
                                  
                                  <Link to="https://social.webestica.com/index.html# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardShareAction10 " data-bs-toggle="dropdown " aria-expanded="false ">
                                      <i className="bi bi-three-dots "></i>
                                  </Link>
                                  
                                  <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction10 ">
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                                      </li>
                                      <li>
                                          <hr className="dropdown-divider " />
                                      </li>
                                      <li>
                                          <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                                      </li>
                                  </ul>
                              </div>
                              
                          </div>
                          

                          
                          <div className="card-body pb-0 ">
                              <p>How do you protect your business against cyber-crime?</p>
                              <div className="card card-body mt-4 ">
                                  
                                  <div className="d-sm-flex justify-content-sm-between align-items-center ">
                                      <span className="small ">16/20 responded</span>
                                      <span className="small ">Results not visible to participants</span>
                                  </div>

                                  
                                  <div className="vstack gap-4 gap-sm-3 mt-3 ">
                                      
                                      <div className="d-flex align-items-center justify-content-between ">
                                          
                                          <div className="overflow-hidden w-100 me-3 ">
                                              <div className="progress bg-primary bg-opacity-10 position-relative " style="height: 30px; ">
                                                  <div className="progress-bar bg-primary bg-opacity-25 " role="progressbar " style="width: 25% " aria-valuenow="25 " aria-valuemin="0 " aria-valuemax="100 ">
                                                  </div>
                                                  <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100 ">We have cybersecurity insurance coverage </span>
                                              </div>
                                          </div>
                                          <div className="flex-shrink-0 ">25%</div>
                                      </div>
                                      

                                      
                                      <div className="d-flex align-items-center justify-content-between ">
                                          
                                          <div className="overflow-hidden w-100 me-3 ">
                                              <div className="progress bg-primary bg-opacity-10 position-relative " style="height: 30px; ">
                                                  <div className="progress-bar bg-primary bg-opacity-25 " role="progressbar " style="width: 15% " aria-valuenow="15 " aria-valuemin="0 " aria-valuemax="100 ">
                                                  </div>
                                                  <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100 ">Our dedicated staff will protect us</span>
                                              </div>
                                          </div>
                                          <div className="flex-shrink-0 ">15%</div>
                                      </div>
                                      

                                      
                                      <div className="d-flex align-items-center justify-content-between ">
                                          
                                          <div className="overflow-hidden w-100 me-3 ">
                                              <div className="progress bg-primary bg-opacity-10 position-relative " style="height: 30px; ">
                                                  <div className="progress-bar bg-primary bg-opacity-25 " role="progressbar " style="width: 10% " aria-valuenow="10 " aria-valuemin="0 " aria-valuemax="100 ">
                                                  </div>
                                                  <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100 ">We give regular training for best practices</span>
                                              </div>
                                          </div>
                                          <div className="flex-shrink-0 ">10%</div>
                                      </div>
                                      

                                      
                                      <div className="d-flex align-items-center justify-content-between ">
                                          
                                          <div className="overflow-hidden w-100 me-3 ">
                                              <div className="progress bg-primary bg-opacity-10 position-relative " style="height: 30px; ">
                                                  <div className="progress-bar bg-primary bg-opacity-25 " role="progressbar " style="width: 55% " aria-valuenow="55 " aria-valuemin="0 " aria-valuemax="100 ">
                                                  </div>
                                                  <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100 ">Third-party vendor protection</span>
                                              </div>
                                          </div>
                                          <div className="flex-shrink-0 ">55%</div>
                                      </div>
                                      
                                  </div>
                              </div>

                              
                              <ul className="nav nav-divider mt-2 mb-0 ">
                                  <li className="nav-item ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html# ">263 votes</Link>
                                  </li>
                                  <li className="nav-item ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html# ">2d left</Link>
                                  </li>
                              </ul>
                              

                              
                              <ul className="nav nav-stack pb-2 small mt-4 ">
                                  <li className="nav-item ">
                                      <Link className="nav-link active text-secondary " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle "></i> Louis, Billy and 126 others </Link>
                                  </li>
                                  <li className="nav-item ms-sm-auto ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> <i className="bi bi-chat-fill pe-1 "></i>Comments (12)</Link>
                                  </li>
                              </ul>
                              
                          </div>
                          
                          
                          <div className="card-footer py-3 ">
                              
                              <ul className="nav nav-fill nav-stack small ">
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 active " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart pe-1 "></i>Liked (56)</Link>
                                  </li>
                                  
                                  <li className="nav-item dropdown ">
                                      <Link to="https://social.webestica.com/index.html# " className="nav-link mb-0 " id="feedActionShare8 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-reply-fill flip-horizontal ps-1 "></i>Share (3)
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="feedActionShare8 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Send via Direct Message</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Bookmark </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-link fa-fw pe-2 "></i>Copy link to post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-share fa-fw pe-2 "></i>Share post via …</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Share to News Feed</Link>
                                          </li>
                                      </ul>
                                  </li>
                                  
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html#! "> <i className="bi bi-send-fill pe-1 "></i>Send</Link>
                                  </li>
                              </ul>
                              
                          </div>
                          
                      </div>
                      


                      
                      <div className="card ">
                          
                          <div className="card-header ">
                              <div className="d-flex align-items-center justify-content-between ">
                                  <div className="d-flex align-items-center ">
                                      
                                      <div className="avatar me-2 ">
                                          <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/11.svg " alt=" " /> </Link>
                                      </div>
                                      
                                      <div>
                                          <h6 className="card-title mb-0 "> <Link to="https://social.webestica.com/index.html#! "> Webestica </Link></h6>
                                          <p className="small mb-0 ">9 December at 10:00 </p>
                                      </div>
                                  </div>
                                  
                                  <div className="dropdown ">
                                      <Link to="https://social.webestica.com/index.html# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardShareAction8 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-three-dots "></i>
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction8 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                                          </li>
                                      </ul>
                                  </div>
                                  
                              </div>
                          </div>
                          

                          
                          <div className="card-body ">
                              <p className="mb-0 ">The next-generation blog, news, and magazine theme for you to start sharing your content today with beautiful aesthetics! This minimal &amp; clean Bootstrap 5 based theme is ideal for all types of sites that aim to provide
                                  users with content. <Link to="https://social.webestica.com/index.html#! "> #bootstrap</Link> <Link to="https://social.webestica.com/index.html#! "> #webestica </Link> <Link to="https://social.webestica.com/index.html#!
                                                  "> #getbootstrap</Link> <Link to="https://social.webestica.com/index.html# "> #bootstrap5 </Link></p>
                          </div>
                          
                          <Link to="https://social.webestica.com/index.html#! "> <img src="./themes_files/assets/images/03(2).jpg " alt=" " /> </Link>
                          
                          <div className="card-body position-relative bg-light ">
                              <Link to="https://social.webestica.com/index.html#! " className="small stretched-link ">https://blogzine.webestica.com</Link>
                              <h6 className="mb-0 mt-1 ">Blogzine - Blog and Magazine Bootstrap 5 Theme</h6>
                              <p className="mb-0 small ">Bootstrap based News, Magazine and Blog Theme</p>
                          </div>
                          

                          
                          <div className="card-footer py-3 ">
                              
                              <ul className="nav nav-fill nav-stack small ">
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 active " to="https://social.webestica.com/index.html#! "> <i className="bi bi-heart pe-1 "></i>Liked (56)</Link>
                                  </li>
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html#! "> <i className="bi bi-chat-fill pe-1 "></i>Comments (12)</Link>
                                  </li>
                                  
                                  <li className="nav-item dropdown ">
                                      <Link to="https://social.webestica.com/index.html# " className="nav-link mb-0 " id="feedActionShare7 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-reply-fill flip-horizontal ps-1 "></i>Share (3)
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="feedActionShare7 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Send via Direct Message</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Bookmark </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-link fa-fw pe-2 "></i>Copy link to post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-share fa-fw pe-2 "></i>Share post via …</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Share to News Feed</Link>
                                          </li>
                                      </ul>
                                  </li>
                                  
                                  <li className="nav-item ">
                                      <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html#! "> <i className="bi bi-send-fill pe-1 "></i>Send</Link>
                                  </li>
                              </ul>
                              
                          </div>
                          

                      </div>
                      

                      
                      <div className="card ">
                          
                          <div className="card-header border-0 pb-0 ">
                              <div className="d-flex align-items-center justify-content-between ">
                                  <div className="d-flex align-items-center ">
                                      
                                      <div className="avatar avatar-story me-2 ">
                                          <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/12.jpg " alt=" " /> </Link>
                                      </div>
                                      
                                      <div>
                                          <div className="nav nav-divider ">
                                              <h6 className="nav-item card-title mb-0 "> <Link to="https://social.webestica.com/index.html#! "> Joan Wallace </Link></h6>
                                              <span className="nav-item small "> 1day</span>
                                          </div>
                                          <p className="mb-0 small ">12 January at 12:00</p>
                                      </div>
                                  </div>
                                  
                                  <div className="dropdown ">
                                      <Link to="https://social.webestica.com/index.html# " className="text-secondary btn btn-secondary-soft-hover py-1 px-2 " id="cardFeedAction2 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-three-dots "></i>
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardFeedAction2 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark fa-fw pe-2 "></i>Save post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-person-x fa-fw pe-2 "></i>Unfollow lori ferguson </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-x-circle fa-fw pe-2 "></i>Hide post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-flag fa-fw pe-2 "></i>Report post</Link>
                                          </li>
                                      </ul>
                                  </div>
                                  
                              </div>
                          </div>
                          
                          
                          <div className="card-body pb-0 ">
                              <p>Comfort reached gay perhaps chamber his <Link to="https://social.webestica.com/index.html#! ">#internship</Link> <Link to="https://social.webestica.com/index.html#! ">#hiring</Link> <Link to="https://social.webestica.com/index.html#! ">#apply</Link>                                    </p>
                          </div>
                          
                          <div className="overflow-hidden fullscreen-video w-100 ">

                              
                              <div className="player-wrapper overflow-hidden ">
                                  <div tabindex="0 " className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported plyr__poster-enabled ">
                                      <div className="plyr__controls "><button className="plyr__controls__item plyr__control " type="button " data-plyr="play " aria-label="Play "><svg className="icon--pressed " aria-hidden="true " focusable="false
                                                  "><use to="#plyr-pause "></use></svg><svg className="icon--not-pressed " aria-hidden="true " focusable="false "><use to="#plyr-play "></use></svg><span className="label--pressed plyr__sr-only ">Pause</span><span className="label--not-pressed
                                                  plyr__sr-only ">Play</span></button>
                                          <div className="plyr__controls__item plyr__progress__container ">
                                              <div className="plyr__progress ">
                                                <input data-plyr="seek " type="range " min="0 " max="100 " step="0.01 " value="0 " autocomplete="off " role="slider " aria-label="Seek " aria-valuemin="0 " aria-valuemax=" /0
                                                  " aria-valuenow="0 " id="plyr-seek-7931 " aria-valuetext="00:00 of 00:00 " style="--value:0%; " /><progress className="plyr__progress__buffer " min="0 " max="100 " value="0 " role="progressbar " aria-hidden="true ">% buffered</progress>
                                                  <span className="plyr__tooltip ">00:00</span>
                                              </div>
                                          </div>
                                          <div className="plyr__controls__item plyr__time--current plyr__time " aria-label="Current time ">00:00</div>
                                          <div className="plyr__controls__item plyr__volume "><button type="button " className="plyr__control plyr__control--pressed " data-plyr="mute "><svg className="icon--pressed " aria-hidden="true " focusable="false
                                                  "><use to="#plyr-muted "></use></svg><svg className="icon--not-pressed " aria-hidden="true " focusable="false "><use to="#plyr-volume "></use></svg><span className="label--pressed plyr__sr-only
                                                  ">Unmute</span><span className="label--not-pressed plyr__sr-only ">Mute</span></button>
                                              <input data-plyr="volume " type="range " min="0 " max="1 " step="0.05 " value="1 " autocomplete="off " role="slider " aria-label="Volume " aria-valuemin="0 " aria-valuemax="100 " aria-valuenow=" /0
                                                  " id="plyr-volume-7931 " aria-valuetext="0.0% " style="--value:0%; " /></div>
                                          <button className="plyr__controls__item plyr__control " type="button " data-plyr="captions "><svg className="icon--pressed " aria-hidden="true " focusable="false "><use to="#plyr-captions-on
                                                  "></use></svg><svg className="icon--not-pressed " aria-hidden="true " focusable="false "><use to="#plyr-captions-off "></use></svg>
                                                  <span
                                                      className="label--pressed plyr__sr-only ">Disable captions</span><span className="label--not-pressed plyr__sr-only ">Enable captions</span></button>
                                          <div className="plyr__controls__item plyr__menu "><button aria-haspopup="true " aria-controls="plyr-settings-7931 " aria-expanded="false " type="button " className="plyr__control " data-plyr="settings
                                                  "><svg aria-hidden="true " focusable="false "><use to="#plyr-settings "></use></svg><span className="plyr__sr-only ">Settings</span></button>
                                              <div className="plyr__menu__container " id="plyr-settings-7931 " hidden=" ">
                                                  <div>
                                                      <div id="plyr-settings-7931-home ">
                                                          <div role="menu "><button data-plyr="settings " type="button " className="plyr__control plyr__control--forward " role="menuitem " aria-haspopup="true " hidden=" "><span>Captions<span className="plyr__menu__value ">Disabled</span></span></button>
                                                              <button data-plyr="settings " type="button " className="plyr__control plyr__control--forward " role="menuitem " aria-haspopup="true " hidden=" "><span>Quality<span className="plyr__menu__value ">undefined</span></span>
                                                                  </button><button data-plyr="settings " type="button " className="plyr__control plyr__control--forward " role="menuitem " aria-haspopup="true "><span>Speed<span className="plyr__menu__value ">Normal</span></span></button></div>
                                                      </div>
                                                      <div id="plyr-settings-7931-captions " hidden=" "><button type="button " className="plyr__control plyr__control--back "><span aria-hidden="true ">Captions</span><span className="plyr__sr-only ">Go back to previous menu</span></button>
                                                          <div role="menu "></div>
                                                      </div>
                                                      <div id="plyr-settings-7931-quality " hidden=" "><button type="button " className="plyr__control plyr__control--back "><span aria-hidden="true ">Quality</span><span className="plyr__sr-only ">Go back to previous menu</span></button>
                                                          <div role="menu "></div>
                                                      </div>
                                                      <div id="plyr-settings-7931-speed " hidden=" "><button type="button " className="plyr__control plyr__control--back "><span aria-hidden="true ">Speed</span><span className="plyr__sr-only ">Go back to previous menu</span></button>
                                                          <div role="menu "><button data-plyr="speed " type="button " role="menuitemradio " className="plyr__control " aria-checked="false " value="0.5 "><span>0.5×</span></button><button data-plyr="speed
                                                  " type="button " role="menuitemradio " className="plyr__control " aria-checked="false " value="0.75 "><span>0.75×</span></button><button data-plyr="speed " type="button " role="menuitemradio " className="plyr__control
                                                  " aria-checked="true " value="1 "><span>Normal</span></button>
                                                              <button data-plyr="speed " type="button " role="menuitemradio " className="plyr__control " aria-checked="false " value="1.25 "><span>1.25×</span></button><button data-plyr="speed " type="button
                                                  " role="menuitemradio " className="plyr__control " aria-checked="false " value="1.5 "><span>1.5×</span></button><button data-plyr="speed " type="button " role="menuitemradio " className="plyr__control " aria-checked="false
                                                  " value="1.75 "><span>1.75×</span></button>
                                                              <button data-plyr="speed " type="button " role="menuitemradio " className="plyr__control " aria-checked="false " value="2 "><span>2×</span></button>
                                                              <button data-plyr="speed " type="button " role="menuitemradio " className="plyr__control " aria-checked="false " value="4 "><span>4×</span></button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div><button className="plyr__controls__item plyr__control " type="button " data-plyr="pip "><svg aria-hidden="true " focusable="false "><use to="#plyr-pip "></use></svg><span className="plyr__sr-only ">PIP</span></button>
                                          <button className="plyr__controls__item plyr__control " type="button " data-plyr="fullscreen "><svg className="icon--pressed " aria-hidden="true " focusable="false "><use to="#plyr-exit-fullscreen
                                                  "></use></svg><svg className="icon--not-pressed " aria-hidden="true " focusable="false "><use to="#plyr-enter-fullscreen "></use></svg>
                                                          <span
                                                              className="label--pressed plyr__sr-only ">Exit fullscreen</span><span className="label--not-pressed plyr__sr-only ">Enter fullscreen</span></button>
                                      </div>
                                      <div className="plyr__video-wrapper "><video className="player-html " crossorigin="anonymous " poster="themes_files/assets/videos/poster.jpg " data-poster="themes_files/assets/images/videos/poster.jpg ">
                      <source src="themes_files/assets/videos/video-feed.mp4 " type="video/mp4 " />
                      </video>
                                          <div className="plyr__poster " style="background-image: url( 'themes_files/assets/videos/poster.jpg'); "></div>
                                      </div>
                                      <div className="plyr__captions "></div><button type="button " className="plyr__control plyr__control--overlaid " data-plyr="play " aria-label="Play "><svg aria-hidden="true " focusable="false "><use to="#plyr-play
                                                  "></use></svg><span className="plyr__sr-only ">Play</span></button></div>
                              </div>
                              

                              
                          </div>
                          
                          <div className="card-body pt-0 ">
                              <ul className="nav nav-stack py-3 small ">
                                  <li className="nav-item ">
                                      <Link className="nav-link active " to="https://social.webestica.com/index.html#! "> <i className="bi bi-hand-thumbs-up-fill pe-1 "></i>Liked (56)</Link>
                                  </li>
                                  <li className="nav-item ">
                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> <i className="bi bi-chat-fill pe-1 "></i>Comments (12)</Link>
                                  </li>
                                  
                                  <li className="nav-item dropdown ms-sm-auto ">
                                      <Link className="nav-link mb-0 " to="https://social.webestica.com/index.html# " id="cardShareAction9 " data-bs-toggle="dropdown " aria-expanded="false ">
                                          <i className="bi bi-reply-fill flip-horizontal ps-1 "></i>Share (3)
                                      </Link>
                                      
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="cardShareAction9 ">
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-envelope fa-fw pe-2 "></i>Send via Direct Message</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bookmark-check fa-fw pe-2 "></i>Bookmark </Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-link fa-fw pe-2 "></i>Copy link to post</Link>
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-share fa-fw pe-2 "></i>Share post via …</Link>
                                          </li>
                                          <li>
                                              <hr className="dropdown-divider " />
                                          </li>
                                          <li>
                                              <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-pencil-square fa-fw pe-2 "></i>Share to News Feed</Link>
                                          </li>
                                      </ul>
                                  </li>
                                  
                              </ul>
                              

                              
                              <div className="d-flex mb-3 ">
                                  
                                  <div className="avatar avatar-xs me-2 ">
                                      <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/12.jpg " alt=" " /> </Link>
                                  </div>
                                  
                                  
                                  <form className="position-relative w-100 ">
                                      <textarea data-autoresize=" " className="form-control pe-4 bg-light " rows="1 " placeholder="Add a comment... "></textarea>
                                      

                                  </form>
                              </div>
                              
                              <ul className="comment-wrap list-unstyled mb-0 ">
                                  
                                  <li className="comment-item ">
                                      <div className="d-flex ">
                                          
                                          <div className="avatar avatar-xs ">
                                              <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/05.jpg " alt=" " /></Link>
                                          </div>
                                          <div className="ms-2 ">
                                              
                                              <div className="bg-light rounded-start-top-0 p-3 rounded ">
                                                  <div className="d-flex justify-content-between ">
                                                      <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Frances Guerrero </Link></h6>
                                                      <small className="ms-2 ">5hr</small>
                                                  </div>
                                                  <p className="small mb-0 ">Preference any astonished unreserved Mrs.</p>
                                              </div>
                                              
                                              <ul className="nav nav-divider py-2 small ">
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (3)</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                  </li>
                                                  <li className="nav-item ">
                                                      <Link className="nav-link " to="https://social.webestica.com/index.html#! "> View 5 replies</Link>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      
                                      <ul className="comment-item-nested list-unstyled ">
                                          
                                          <li className="comment-item ">
                                              <div className="d-flex ">
                                                  
                                                  <div className="avatar avatar-xs ">
                                                      <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/06.jpg " alt=" " /></Link>
                                                  </div>
                                                  
                                                  <div className="ms-2 ">
                                                      <div className="bg-light p-3 rounded ">
                                                          <div className="d-flex justify-content-between ">
                                                              <h6 className="mb-1 "> <Link to="https://social.webestica.com/index.html#! "> Lori Stevens </Link> </h6>
                                                              <small className="ms-2 ">2hr</small>
                                                          </div>
                                                          <p className="small mb-0 ">Dependent on so extremely delivered by. Yet ﻿no jokes worse her why.</p>
                                                      </div>
                                                      
                                                      <ul className="nav nav-divider py-2 small ">
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Like (5)</Link>
                                                          </li>
                                                          <li className="nav-item ">
                                                              <Link className="nav-link " to="https://social.webestica.com/index.html#! "> Reply</Link>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </li>
                                          
                                      </ul>
                                      
                                  </li>
                                  
                              </ul>
                              
                          </div>
                          
                          
                          <div className="card-footer border-0 pt-0 ">
                              
                              <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center " data-bs-toggle="button " aria-pressed="true ">
                                  <div className="spinner-dots me-2 ">
                                      <span className="spinner-dot "></span>
                                      <span className="spinner-dot "></span>
                                      <span className="spinner-dot "></span>
                                  </div>
                                  Load more comments
                              </Link>
                          </div>
                          
                      </div>
                      

                      
                      <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-loader btn-primary-soft " data-bs-toggle="button " aria-pressed="true ">
                          <span className="load-text "> Load more </span>
                          <div className="load-icon ">
                              <div className="spinner-grow spinner-grow-sm " role="status ">
                                  <span className="visually-hidden ">Loading...</span>
                              </div>
                          </div>
                      </Link>
                      

                  </div>
                  

                  
                  <div className="col-lg-3 ">
                      <div className="row g-4 ">
                          
                          <div className="col-sm-6 col-lg-12 ">
                              <div className="card ">
                                  
                                  <div className="card-header pb-0 border-0 ">
                                      <h5 className="card-title mb-0 ">Who to follow</h5>
                                  </div>
                                  
                                  
                                  <div className="card-body ">
                                      
                                      <div className="hstack gap-2 mb-3 ">
                                          
                                          <div className="avatar ">
                                              <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./themes_files/assets/images/04.jpg " alt=" " /></Link>
                                          </div>
                                          
                                          <div className="overflow-hidden ">
                                              <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Judy Nguyen </Link>
                                              <p className="mb-0 small text-truncate ">News anchor</p>
                                          </div>
                                          
                                          <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                      </div>
                                      
                                      
                                      <div className="hstack gap-2 mb-3 ">
                                          
                                          <div className="avatar avatar-story ">
                                              <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/05.jpg " alt=" " /> </Link>
                                          </div>
                                          
                                          <div className="overflow-hidden ">
                                              <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Amanda Reed </Link>
                                              <p className="mb-0 small text-truncate ">Web Developer</p>
                                          </div>
                                          
                                          <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                      </div>
                                      

                                      
                                      <div className="hstack gap-2 mb-3 ">
                                          
                                          <div className="avatar ">
                                              <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/11.jpg " alt=" " /> </Link>
                                          </div>
                                          
                                          <div className="overflow-hidden ">
                                              <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Billy Vasquez </Link>
                                              <p className="mb-0 small text-truncate ">News anchor</p>
                                          </div>
                                          
                                          <Link className="btn btn-primary rounded-circle icon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="bi bi-person-check-fill "> </i></Link>
                                      </div>
                                      

                                      
                                      <div className="hstack gap-2 mb-3 ">
                                          
                                          <div className="avatar ">
                                              <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/01.jpg " alt=" " /> </Link>
                                          </div>
                                          
                                          <div className="overflow-hidden ">
                                              <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Lori Ferguson </Link>
                                              <p className="mb-0 small text-truncate ">Web Developer at Webestica</p>
                                          </div>
                                          
                                          <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                      </div>
                                      

                                      
                                      <div className="hstack gap-2 mb-3 ">
                                          
                                          <div className="avatar ">
                                              <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./themes_files/assets/images/placeholder.jpg " alt=" " /> </Link>
                                          </div>
                                          
                                          <div className="overflow-hidden ">
                                              <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Carolyn Ortiz </Link>
                                              <p className="mb-0 small text-truncate ">News anchor</p>
                                          </div>
                                          
                                          <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                      </div>
                                      

                                      
                                      <div className="d-grid mt-3 ">
                                          <Link className="btn btn-sm btn-primary-soft " to="https://social.webestica.com/index.html#! ">View more</Link>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>
                          

                          
                          <div className="col-sm-6 col-lg-12 ">
                              <div className="card ">
                                  
                                  <div className="card-header pb-0 border-0 ">
                                      <h5 className="card-title mb-0 ">Today’s news</h5>
                                  </div>
                                  
                                  
                                  <div className="card-body ">
                                      
                                      <div className="mb-3 ">
                                          <h6 className="mb-0 "><Link to="https://social.webestica.com/blog-details.html ">Ten questions you should answer truthfully</Link></h6>
                                          <small>2hr</small>
                                      </div>
                                      
                                      <div className="mb-3 ">
                                          <h6 className="mb-0 "><Link to="https://social.webestica.com/blog-details.html ">Five unbelievable facts about money</Link></h6>
                                          <small>3hr</small>
                                      </div>
                                      
                                      <div className="mb-3 ">
                                          <h6 className="mb-0 "><Link to="https://social.webestica.com/blog-details.html ">Best Pinterest Boards for learning about business</Link></h6>
                                          <small>4hr</small>
                                      </div>
                                      
                                      <div className="mb-3 ">
                                          <h6 className="mb-0 "><Link to="https://social.webestica.com/blog-details.html ">Skills that you can learn from business</Link></h6>
                                          <small>6hr</small>
                                      </div>
                                      
                                      <Link to="https://social.webestica.com/index.html#! " role="button " className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center " data-bs-toggle="button " aria-pressed="true ">
                                          <div className="spinner-dots me-2 ">
                                              <span className="spinner-dot "></span>
                                              <span className="spinner-dot "></span>
                                              <span className="spinner-dot "></span>
                                          </div>
                                          View all latest news
                                      </Link>
                                  </div>
                                  
                              </div>
                          </div>
                          
                      </div>
                  </div>
                  

              </div>
              
          </div>
          
      </main>
      

      
      <div className="d-none d-lg-block ">
          
          <Link className="icon-md btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5 " data-bs-toggle="offcanvas " to="https://social.webestica.com/index.html#offcanvasChat " role="button " aria-controls="offcanvasChat ">
              <i className="bi bi-chat-left-text-fill "></i>
          </Link>
          
          <div className="offcanvas offcanvas-end " data-bs-scroll="true " data-bs-backdrop="false " tabindex="-1 " id="offcanvasChat ">
              
              <div className="offcanvas-header d-flex justify-content-between ">
                  <h5 className="offcanvas-title ">Messaging</h5>
                  <div className="d-flex ">
                      
                      <Link to="https://social.webestica.com/index.html# " className="btn btn-secondary-soft-hover py-1 px-2 ">
                          <i className="bi bi-pencil-square "></i>
                      </Link>
                      
                      <div className="dropdown ">
                          <Link to="https://social.webestica.com/index.html# " className="btn btn-secondary-soft-hover py-1 px-2 " id="chatAction " data-bs-toggle="dropdown " aria-expanded="false ">
                              <i className="bi bi-three-dots "></i>
                          </Link>
                          
                          <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="chatAction ">
                              <li>
                                  <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-check-square fa-fw pe-2 "></i>Mark all as read</Link>
                              </li>
                              <li>
                                  <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-gear fa-fw pe-2 "></i>Chat setting </Link>
                              </li>
                              <li>
                                  <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-bell fa-fw pe-2 "></i>Disable notifications</Link>
                              </li>
                              <li>
                                  <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-volume-up-fill fa-fw pe-2 "></i>Message sounds</Link>
                              </li>
                              <li>
                                  <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-slash-circle fa-fw pe-2 "></i>Block setting</Link>
                              </li>
                              <li>
                                  <hr className="dropdown-divider " />
                              </li>
                              <li>
                                  <Link className="dropdown-item " to="https://social.webestica.com/index.html# "> <i className="bi bi-people fa-fw pe-2 "></i>Create a group chat</Link>
                              </li>
                          </ul>
                      </div>
                      

                      
                      <Link to="https://social.webestica.com/index.html# " className="btn btn-secondary-soft-hover py-1 px-2 " data-bs-dismiss="offcanvas " aria-label="Close ">
                          <i className="fa-solid fa-xmark "></i>
                      </Link>

                  </div>
              </div>
              
              <div className="offcanvas-body pt-0 custom-scrollbar os-host os-theme-dark os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition ">
                  <div className="os-resize-observer-host observed ">
                      <div className="os-resize-observer " style="left: 0px; right: auto; "></div>
                  </div>
                  <div className="os-size-auto-observer observed " style="height: calc(100% + 1px); float: left; ">
                      <div className="os-resize-observer "></div>
                  </div>
                  <div className="os-content-glue " style="margin: 0px -24px -16px; width: 398px; height: 789px; "></div>
                  <div className="os-padding ">
                      <div className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid " style="overflow-y: scroll; ">
                          <div className="os-content " style="padding: 0px 24px 16px; height: 100%; width: 100%; ">
                              
                              <form className="rounded position-relative ">
                                  <input className="form-control ps-5 bg-light " type="search " placeholder="Search... " aria-label="Search " />
                                  <button className="btn bg-transparent px-3 py-0 position-absolute top-50 start-0 translate-middle-y " type="submit "><i className="bi bi-search fs-5 "> </i></button>
                              </form>
                              
                              <ul className="list-unstyled ">

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative toast-btn " data-target="chatToast ">
                                      
                                      <div className="avatar status-online ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/01.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Frances Guerrero </Link>
                                          <div className="small text-secondary text-truncate ">Frances sent a photo.</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> Just now </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative toast-btn " data-target="chatToast2 ">
                                      
                                      <div className="avatar status-online ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/02.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Lori Ferguson </Link>
                                          <div className="small text-secondary text-truncate ">You missed a call form Carolyn🤙</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 1min </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="avatar status-offline ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/placeholder.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Samuel Bishop </Link>
                                          <div className="small text-secondary text-truncate ">Day sweetness why cordially 😊</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 2min </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="avatar ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/04.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Dennis Barrett </Link>
                                          <div className="small text-secondary text-truncate ">Happy birthday🎂</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 10min </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="avatar avatar-story status-online ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/05.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Judy Nguyen </Link>
                                          <div className="small text-secondary text-truncate ">Thank you!</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 2hrs </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="avatar status-online ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/06.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Carolyn Ortiz </Link>
                                          <div className="small text-secondary text-truncate ">Greetings from Webestica.</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 1 day </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="flex-shrink-0 avatar ">
                                          <ul className="avatar-group avatar-group-four ">
                                              <li className="avatar avatar-xxs ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/06.jpg " alt="avatar " />
                                              </li>
                                              <li className="avatar avatar-xxs ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/07.jpg " alt="avatar " />
                                              </li>
                                              <li className="avatar avatar-xxs ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/08.jpg " alt="avatar " />
                                              </li>
                                              <li className="avatar avatar-xxs ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/09.jpg " alt="avatar "  />
                                              </li>
                                          </ul>
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link text-truncate d-inline-block " to="https://social.webestica.com/index.html#! ">Frances, Lori, Amanda, Lawson </Link>
                                          <div className="small text-secondary text-truncate ">Btw are you looking for job change?</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 4 day </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="avatar status-offline ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/08.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Bryan Knight </Link>
                                          <div className="small text-secondary text-truncate ">if you are available to discuss🙄</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 6 day </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="avatar ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/09.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Louis Crawford </Link>
                                          <div className="small text-secondary text-truncate ">🙌Congrats on your work anniversary!</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 1 day </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="avatar status-online ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/10.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Jacqueline Miller </Link>
                                          <div className="small text-secondary text-truncate ">No sorry, Thanks.</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 15, dec </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="avatar ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/11.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Amanda Reed </Link>
                                          <div className="small text-secondary text-truncate ">Interested can share CV at.</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 18, dec </div>
                                  </li>

                                  
                                  <li className="mt-3 hstack gap-3 align-items-center position-relative ">
                                      
                                      <div className="avatar status-online ">
                                          <img className="avatar-img rounded-circle " src="./themes_files/assets/images/12.jpg " alt=" " />
                                      </div>
                                      
                                      <div className="overflow-hidden ">
                                          <Link className="h6 mb-0 stretched-link " to="https://social.webestica.com/index.html#! ">Larry Lawson </Link>
                                          <div className="small text-secondary text-truncate ">Hope you're doing well and Safe.</div>
                                      </div>
                                      
                                      <div className="small ms-auto text-nowrap "> 20, dec </div>
                                  </li>
                                  
                                  <li className="mt-3 d-grid ">
                                      <Link className="btn btn-primary-soft " to="https://social.webestica.com/messaging.html "> See all in messaging </Link>
                                  </li>

                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden ">
                      <div className="os-scrollbar-track os-scrollbar-track-off ">
                          <div className="os-scrollbar-handle " style="width: 100%; transform: translate(0px, 0px); "></div>
                      </div>
                  </div>
                  <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden ">
                      <div className="os-scrollbar-track os-scrollbar-track-off ">
                          <div className="os-scrollbar-handle " style="height: 89.6708%; transform: translate(0px, 0px); "></div>
                      </div>
                  </div>
                  <div className="os-scrollbar-corner "></div>
              </div>
              
          </div>
          

          

          
          <div aria-live="polite " aria-atomic="true " className="position-relative ">
              <div className="toast-container toast-chat d-flex gap-3 align-items-end ">

                  
                  <div id="chatToast " className="toast mb-0 bg-mode " role="alert " aria-live="assertive " aria-atomic="true " data-bs-autohide="false ">
                      <div className="toast-header bg-mode ">
                          
                          <div className="d-flex justify-content-between align-items-center w-100 ">
                              <div className="d-flex ">
                                  <div className="flex-shrink-0 avatar me-2 ">
                                      <img className="avatar-img rounded-circle " src="./themes_files/assets/images/01.jpg " alt=" " />
                                  </div>
                                  <div className="flex-grow-1 ">
                                      <h6 className="mb-0 mt-1 ">Frances Guerrero</h6>
                                      <div className="small text-secondary "><i className="fa-solid fa-circle text-success me-1 "></i>Online</div>
                                  </div>
                              </div>
                              <div className="d-flex ">
                                  
                                  <div className="dropdown ">
                                      <Link className="btn btn-secondary-soft-hover py-1 px-2 " to="https://social.webestica.com/index.html# " id="chatcoversationDropdown " data-bs-toggle="dropdown " data-bs-auto-close="outside " aria-expanded="false
                                                  "><i className="bi bi-three-dots-vertical "></i></Link>
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="chatcoversationDropdown ">
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-camera-video me-2 fw-icon "></i>Video call</Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-telephone me-2 fw-icon "></i>Audio call</Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-trash me-2 fw-icon "></i>Delete </Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-chat-square-text me-2 fw-icon "></i>Mark as unread</Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-volume-up me-2 fw-icon "></i>Muted</Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-archive me-2 fw-icon "></i>Archive</Link></li>
                                          <li className="dropdown-divider "></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-flag me-2 fw-icon "></i>Report</Link></li>
                                      </ul>
                                  </div>
                                  
                                  <Link className="btn btn-secondary-soft-hover py-1 px-2 " data-bs-toggle="collapse " to="https://social.webestica.com/index.html#collapseChat " aria-expanded="false " aria-controls="collapseChat "><i className="bi bi-dash-lg "></i></Link>
                                  <button className="btn btn-secondary-soft-hover py-1 px-2 " data-bs-dismiss="toast " aria-label="Close "><i className="fa-solid fa-xmark "></i></button>
                              </div>
                          </div>
                          

                      </div>
                      <div className="toast-body collapse show " id="collapseChat ">
                          
                          <div className="chat-conversation-content custom-scrollbar h-200px os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition ">
                              <div className="os-resize-observer-host observed ">
                                  <div className="os-resize-observer " style="left: 0px; right: auto; "></div>
                              </div>
                              <div className="os-size-auto-observer observed " style="height: calc(100% + 1px); float: left; ">
                                  <div className="os-resize-observer "></div>
                              </div>
                              <div className="os-content-glue " style="margin: 0px; "></div>
                              <div className="os-padding ">
                                  <div className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid " style="overflow: visible; ">
                                      <div className="os-content " style="padding: 0px; height: 100%; width: 100%; ">
                                          
                                          <div className="text-center small my-2 ">Jul 16, 2022, 06:15 am</div>
                                          
                                          <div className="d-flex mb-1 ">
                                              <div className="flex-shrink-0 avatar avatar-xs me-2 ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/01.jpg " alt=" " />
                                              </div>
                                              <div className="flex-grow-1 ">
                                                  <div className="w-100 ">
                                                      <div className="d-flex flex-column align-items-start ">
                                                          <div className="bg-light text-secondary p-2 px-3 rounded-2 ">Applauded no discovery😊</div>
                                                          <div className="small my-2 ">6:15 AM</div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="d-flex justify-content-end text-end mb-1 ">
                                              <div className="w-100 ">
                                                  <div className="d-flex flex-column align-items-end ">
                                                      <div className="bg-primary text-white p-2 px-3 rounded-2 ">With pleasure</div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="d-flex mb-1 ">
                                              <div className="flex-shrink-0 avatar avatar-xs me-2 ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/01.jpg " alt=" " />
                                              </div>
                                              <div className="flex-grow-1 ">
                                                  <div className="w-100 ">
                                                      <div className="d-flex flex-column align-items-start ">
                                                          <div className="bg-light text-secondary p-2 px-3 rounded-2 ">Please find the attached</div>
                                                          
                                                          
                                                          <div className="small my-2 ">12:16 PM</div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="d-flex mb-1 ">
                                              <div className="flex-shrink-0 avatar avatar-xs me-2 ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/01.jpg " alt=" " />
                                              </div>
                                              <div className="flex-grow-1 ">
                                                  <div className="w-100 ">
                                                      <div className="d-flex flex-column align-items-start ">
                                                          <div className="bg-light text-secondary p-2 px-3 rounded-2 ">How promotion excellent curiosity😮</div>
                                                          <div className="small my-2 ">3:22 PM</div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="d-flex justify-content-end text-end mb-1 ">
                                              <div className="w-100 ">
                                                  <div className="d-flex flex-column align-items-end ">
                                                      <div className="bg-primary text-white p-2 px-3 rounded-2 ">And sir dare view.</div>
                                                      
                                                      <div className="d-flex my-2 ">
                                                          <div className="small text-secondary ">5:35 PM</div>
                                                          <div className="small ms-2 "><i className="fa-solid fa-check "></i></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="text-center small my-2 ">2 New Messages</div>
                                          
                                          <div className="d-flex mb-1 ">
                                              <div className="flex-shrink-0 avatar avatar-xs me-2 ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/01.jpg " alt=" " />
                                              </div>
                                              <div className="flex-grow-1 ">
                                                  <div className="w-100 ">
                                                      <div className="d-flex flex-column align-items-start ">
                                                          <div className="bg-light text-secondary p-3 rounded-2 ">
                                                              <div className="typing d-flex align-items-center ">
                                                                  <div className="dot "></div>
                                                                  <div className="dot "></div>
                                                                  <div className="dot "></div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden ">
                                  <div className="os-scrollbar-track os-scrollbar-track-off ">
                                      <div className="os-scrollbar-handle " style="transform: translate(0px, 0px); "></div>
                                  </div>
                              </div>
                              <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden ">
                                  <div className="os-scrollbar-track os-scrollbar-track-off ">
                                      <div className="os-scrollbar-handle " style="transform: translate(0px, 0px); "></div>
                                  </div>
                              </div>
                              <div className="os-scrollbar-corner "></div>
                          </div>
                          
                          
                          <div className="mt-2 ">
                              
                              <textarea className="form-control mb-sm-0 mb-3 " placeholder="Type a message " rows="1 "></textarea>
                              
                              <div className="d-sm-flex align-items-end mt-2 ">
                                  <button className="btn btn-sm btn-danger-soft me-2 "><i className="fa-solid fa-face-smile fs-6 "></i></button>
                                  <button className="btn btn-sm btn-secondary-soft me-2 "><i className="fa-solid fa-paperclip fs-6 "></i></button>
                                  <button className="btn btn-sm btn-success-soft me-2 "> Gif </button>
                                  <button className="btn btn-sm btn-primary ms-auto "> Send </button>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                  

                  
                  <div id="chatToast2 " className="toast mb-0 bg-mode " role="alert " aria-live="assertive " aria-atomic="true " data-bs-autohide="false ">
                      <div className="toast-header bg-mode ">
                          
                          <div className="d-flex justify-content-between align-items-center w-100 ">
                              <div className="d-flex ">
                                  <div className="flex-shrink-0 avatar me-2 ">
                                      <img className="avatar-img rounded-circle " src="./themes_files/assets/images/02.jpg " alt=" " />
                                  </div>
                                  <div className="flex-grow-1 ">
                                      <h6 className="mb-0 mt-1 ">Lori Ferguson</h6>
                                      <div className="small text-secondary "><i className="fa-solid fa-circle text-success me-1 "></i>Online</div>
                                  </div>
                              </div>
                              <div className="d-flex ">
                                  
                                  <div className="dropdown ">
                                      <Link className="btn btn-secondary-soft-hover py-1 px-2 " to="https://social.webestica.com/index.html# " id="chatcoversationDropdown2 " role="button " data-bs-toggle="dropdown " data-bs-auto-close="outside
                                                  " aria-expanded="false "><i className="bi bi-three-dots-vertical "></i></Link>
                                      <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="chatcoversationDropdown2 ">
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-camera-video me-2 fw-icon "></i>Video call</Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-telephone me-2 fw-icon "></i>Audio call</Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-trash me-2 fw-icon "></i>Delete </Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-chat-square-text me-2 fw-icon "></i>Mark as unread</Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-volume-up me-2 fw-icon "></i>Muted</Link></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-archive me-2 fw-icon "></i>Archive</Link></li>
                                          <li className="dropdown-divider "></li>
                                          <li><Link className="dropdown-item " to="https://social.webestica.com/index.html# "><i className="bi bi-flag me-2 fw-icon "></i>Report</Link></li>
                                      </ul>
                                  </div>
                                  
                                  <Link className="btn btn-secondary-soft-hover py-1 px-2 " data-bs-toggle="collapse " to="https://social.webestica.com/index.html#collapseChat2 " role="button " aria-expanded="false " aria-controls="collapseChat2
                                                  "><i className="bi bi-dash-lg "></i></Link>
                                  <button className="btn btn-secondary-soft-hover py-1 px-2 " data-bs-dismiss="toast " aria-label="Close "><i className="fa-solid fa-xmark "></i></button>
                              </div>
                          </div>
                          

                      </div>
                      <div className="toast-body collapse show " id="collapseChat2 ">
                          
                          <div className="chat-conversation-content custom-scrollbar h-200px os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition ">
                              <div className="os-resize-observer-host observed ">
                                  <div className="os-resize-observer " style="left: 0px; right: auto; "></div>
                              </div>
                              <div className="os-size-auto-observer observed " style="height: calc(100% + 1px); float: left; ">
                                  <div className="os-resize-observer "></div>
                              </div>
                              <div className="os-content-glue " style="margin: 0px; "></div>
                              <div className="os-padding ">
                                  <div className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid " style="overflow: visible; ">
                                      <div className="os-content " style="padding: 0px; height: 100%; width: 100%; ">
                                          
                                          <div className="text-center small my-2 ">Jul 16, 2022, 06:15 am</div>
                                          
                                          <div className="d-flex mb-1 ">
                                              <div className="flex-shrink-0 avatar avatar-xs me-2 ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/02.jpg " alt=" " />
                                              </div>
                                              <div className="flex-grow-1 ">
                                                  <div className="w-100 ">
                                                      <div className="d-flex flex-column align-items-start ">
                                                          <div className="bg-light text-secondary p-2 px-3 rounded-2 ">Applauded no discovery😊</div>
                                                          <div className="small my-2 ">6:15 AM</div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="d-flex justify-content-end text-end mb-1 ">
                                              <div className="w-100 ">
                                                  <div className="d-flex flex-column align-items-end ">
                                                      <div className="bg-primary text-white p-2 px-3 rounded-2 ">With pleasure</div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="d-flex mb-1 ">
                                              <div className="flex-shrink-0 avatar avatar-xs me-2 ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/02.jpg " alt=" " />
                                              </div>
                                              <div className="flex-grow-1 ">
                                                  <div className="w-100 ">
                                                      <div className="d-flex flex-column align-items-start ">
                                                          <div className="bg-light text-secondary p-2 px-3 rounded-2 ">Please find the attached</div>
                                                          
                                                          
                                                          <div className="small my-2 ">12:16 PM</div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="d-flex mb-1 ">
                                              <div className="flex-shrink-0 avatar avatar-xs me-2 ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/02.jpg " alt=" " />
                                              </div>
                                              <div className="flex-grow-1 ">
                                                  <div className="w-100 ">
                                                      <div className="d-flex flex-column align-items-start ">
                                                          <div className="bg-light text-secondary p-2 px-3 rounded-2 ">How promotion excellent curiosity😮</div>
                                                          <div className="small my-2 ">3:22 PM</div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="d-flex justify-content-end text-end mb-1 ">
                                              <div className="w-100 ">
                                                  <div className="d-flex flex-column align-items-end ">
                                                      <div className="bg-primary text-white p-2 px-3 rounded-2 ">And sir dare view.</div>
                                                      
                                                      <div className="d-flex my-2 ">
                                                          <div className="small text-secondary ">5:35 PM</div>
                                                          <div className="small ms-2 "><i className="fa-solid fa-check "></i></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          
                                          <div className="text-center small my-2 ">2 New Messages</div>
                                          
                                          <div className="d-flex mb-1 ">
                                              <div className="flex-shrink-0 avatar avatar-xs me-2 ">
                                                  <img className="avatar-img rounded-circle " src="./themes_files/assets/images/02.jpg " alt=" " />
                                              </div>
                                              <div className="flex-grow-1 ">
                                                  <div className="w-100 ">
                                                      <div className="d-flex flex-column align-items-start ">
                                                          <div className="bg-light text-secondary p-3 rounded-2 ">
                                                              <div className="typing d-flex align-items-center ">
                                                                  <div className="dot "></div>
                                                                  <div className="dot "></div>
                                                                  <div className="dot "></div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden ">
                                  <div className="os-scrollbar-track os-scrollbar-track-off ">
                                      <div className="os-scrollbar-handle " style="transform: translate(0px, 0px); "></div>
                                  </div>
                              </div>
                              <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden ">
                                  <div className="os-scrollbar-track os-scrollbar-track-off ">
                                      <div className="os-scrollbar-handle " style="transform: translate(0px, 0px); "></div>
                                  </div>
                              </div>
                              <div className="os-scrollbar-corner "></div>
                          </div>
                          
                          
                          <div className="mt-2 ">
                              
                              <textarea className="form-control mb-sm-0 mb-3 " placeholder="Type a message " rows="1 "></textarea>
                              
                              <div className="d-sm-flex align-items-end mt-2 ">
                                  <button className="btn btn-sm btn-danger-soft me-2 "><i className="fa-solid fa-face-smile fs-6 "></i></button>
                                  <button className="btn btn-sm btn-secondary-soft me-2 "><i className="fa-solid fa-paperclip fs-6 "></i></button>
                                  <button className="btn btn-sm btn-success-soft me-2 "> Gif </button>
                                  <button className="btn btn-sm btn-primary ms-auto "> Send </button>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                  

              </div>
          </div>
          

      </div>
      

      
      <div className="modal fade " id="modalCreateFeed " tabindex="-1 " aria-labelledby="modalLabelCreateFeed " aria-hidden="true ">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
              <div className="modal-content ">
                  
                  <div className="modal-header ">
                      <h5 className="modal-title " id="modalLabelCreateFeed ">Create post</h5>
                      <button type="button " className="btn-close " data-bs-dismiss="modal " aria-label="Close "></button>
                  </div>
                  

                  
                  <div className="modal-body ">
                      
                      <div className="d-flex mb-3 ">
                          
                          <div className="avatar avatar-xs me-2 ">
                              <img className="avatar-img rounded-circle " src="./themes_files/assets/images/03.jpg " alt=" " />
                          </div>
                          
                          <form className="w-100 ">
                              <textarea className="form-control pe-4 fs-3 lh-1 border-0 " rows="4 " placeholder="Share your thoughts... " autofocus=" "></textarea>
                          </form>
                      </div>
                      
                      <div className="hstack gap-2 ">
                          <Link className="icon-md bg-success bg-opacity-10 text-success rounded-circle " to="https://social.webestica.com/index.html# " data-bs-toggle="tooltip " data-bs-placement="top " title=" " data-bs-original-title="Photo
                                                  "> <i className="bi bi-image-fill "></i> </Link>
                          <Link className="icon-md bg-info bg-opacity-10 text-info rounded-circle " to="https://social.webestica.com/index.html# " data-bs-toggle="tooltip " data-bs-placement="top " title=" " data-bs-original-title="Video "> <i className="bi
                                                  bi-camera-reels-fill "></i> </Link>
                          <Link className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle " to="https://social.webestica.com/index.html# " data-bs-toggle="tooltip " data-bs-placement="top " title=" " data-bs-original-title="Events
                                                  "> <i className="bi bi-calendar2-event-fill "></i> </Link>
                          <Link className="icon-md bg-warning bg-opacity-10 text-warning rounded-circle " to="https://social.webestica.com/index.html# " data-bs-toggle="tooltip " data-bs-placement="top " title=" " data-bs-original-title="Feeling/Activity
                                                  "> <i className="bi bi-emoji-smile-fill "></i> </Link>
                          <Link className="icon-md bg-light text-secondary rounded-circle " to="https://social.webestica.com/index.html# " data-bs-toggle="tooltip " data-bs-placement="top " title=" " data-bs-original-title="Check in "> <i className="bi bi-geo-alt-fill "></i> </Link>
                          <Link className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle " to="https://social.webestica.com/index.html# " data-bs-toggle="tooltip " data-bs-placement="top " title=" " data-bs-original-title="Tag people on
                                                  top "> <i className="bi bi-tag-fill "></i> </Link>
                      </div>
                      
                  </div>
                  

                  
                  <div className="modal-footer row justify-content-between ">
                      
                      <div className="col-lg-3 ">
                          <div className="choices " data-type="select-one " tabindex="0 " role="listbox " aria-haspopup="true " aria-expanded="false ">
                              <div className="choices__inner "><select className="form-select js-choice choice-select-text-none choices__input " data-position="top " data-search-enabled="false " hidden=" " tabindex="-1 " data-choice="activ /e
                                                  "><option value="PB ">Public</option></select>
                                  <div className="choices__list choices__list--single ">
                                      <div className="choices__item choices__item--selectable " data-item=" " data-id="1 " data-value="PB " data-custom-properties="null " aria-selected="true ">Public</div>
                                  </div>
                              </div>
                              <div className="choices__list choices__list--dropdown " aria-expanded="false ">
                                  <div className="choices__list " role="listbox ">
                                      <div id="choices--sqoy-item-choice-1 " className="choices__item choices__item--choice choices__item--selectable is-highlighted " role="option " data-choice=" " data-id="1 " data-value="PV " data-select-text="Press
                                                  to select " data-choice-selectable=" " aria-selected="true ">Custom</div>
                                      <div id="choices--sqoy-item-choice-2 " className="choices__item choices__item--choice choices__item--selectable " role="option " data-choice=" " data-id="2 " data-value="PV " data-select-text="Press to select
                                                  " data-choice-selectable=" ">Friends</div>
                                      <div id="choices--sqoy-item-choice-3 " className="choices__item choices__item--choice choices__item--selectable " role="option " data-choice=" " data-id="3 " data-value="PV " data-select-text="Press to select
                                                  " data-choice-selectable=" ">Only me</div>
                                      <div id="choices--sqoy-item-choice-4 " className="choices__item choices__item--choice is-selected choices__item--selectable " role="option " data-choice=" " data-id="4 " data-value="PB " data-select-text="Press to
                                                  select " data-choice-selectable=" ">Public</div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                      <div className="col-lg-8 text-sm-end ">
                          <button type="button " className="btn btn-danger-soft me-2 "> <i className="bi bi-camera-video-fill pe-1 "></i> Live video</button>
                          <button type="button " className="btn btn-success-soft ">Post</button>
                      </div>
                  </div>
                  

              </div>
          </div>
      </div>
      

      
      <div className="modal fade " id="feedActionPhoto " tabindex="-1 " aria-labelledby="feedActionPhotoLabel " aria-hidden="true ">
          <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content ">
                  
                  <div className="modal-header ">
                      <h5 className="modal-title " id="feedActionPhotoLabel ">Add post photo</h5>
                      <button type="button " className="btn-close " data-bs-dismiss="modal " aria-label="Close "></button>
                  </div>
                  

                  
                  <div className="modal-body ">
                      
                      <div className="d-flex mb-3 ">
                          
                          <div className="avatar avatar-xs me-2 ">
                              <img className="avatar-img rounded-circle " src="./themes_files/assets/images/03.jpg " alt=" " />
                          </div>
                          
                          <form className="w-100 ">
                              <textarea className="form-control pe-4 fs-3 lh-1 border-0 " rows="2 " placeholder="Share your thoughts... "></textarea>
                          </form>
                      </div>

                      
                      <div>
                          <label className="form-label ">Upload attachment</label>
                          <div className="dropzone dropzone-default card shadow-none dz-clickable " data-dropzone="{&quot;maxFiles&quot;:2} ">
                              <div className="dz-message ">
                                  <i className="bi bi-images display-3 "></i>
                                  <p>Drag here or click to upload photo.</p>
                              </div>
                          </div>
                      </div>
                      

                  </div>
                  

                  
                  <div className="modal-footer ">
                      
                      <button type="button " className="btn btn-danger-soft me-2 " data-bs-dismiss="modal ">Cancel</button>
                      <button type="button " className="btn btn-success-soft ">Post</button>
                  </div>
                  
              </div>
          </div>
      </div>
      

      
      <div className="modal fade " id="feedActionVideo " tabindex="-1 " aria-labelledby="feedActionVideoLabel " aria-hidden="true ">
          <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content ">
                  
                  <div className="modal-header ">
                      <h5 className="modal-title " id="feedActionVideoLabel ">Add post video</h5>
                      <button type="button " className="btn-close " data-bs-dismiss="modal " aria-label="Close "></button>
                  </div>
                  

                  
                  <div className="modal-body ">
                      
                      <div className="d-flex mb-3 ">
                          
                          <div className="avatar avatar-xs me-2 ">
                              <img className="avatar-img rounded-circle " src="./themes_files/assets/images/03.jpg " alt=" " />
                          </div>
                          
                          <form className="w-100 ">
                              <textarea className="form-control pe-4 fs-3 lh-1 border-0 " rows="2 " placeholder="Share your thoughts... "></textarea>
                          </form>
                      </div>

                      
                      <div>
                          <label className="form-label ">Upload attachment</label>
                          <div className="dropzone dropzone-default card shadow-none dz-clickable " data-dropzone="{&quot;maxFiles&quot;:2} ">
                              <div className="dz-message ">
                                  <i className="bi bi-camera-reels display-3 "></i>
                                  <p>Drag here or click to upload video.</p>
                              </div>
                          </div>
                      </div>
                      

                  </div>
                  

                  
                  <div className="modal-footer ">
                      
                      <button type="button " className="btn btn-danger-soft me-2 "><i className="bi bi-camera-video-fill pe-1 "></i> Live video</button>
                      <button type="button " className="btn btn-success-soft ">Post</button>
                  </div>
                  
              </div>
          </div>
      </div>
      

      
      <div className="modal fade " id="modalCreateEvents " tabindex="-1 " aria-labelledby="modalLabelCreateAlbum " aria-hidden="true ">
          <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content ">
                  
                  <div className="modal-header ">
                      <h5 className="modal-title " id="modalLabelCreateAlbum ">Create event</h5>
                      <button type="button " className="btn-close " data-bs-dismiss="modal " aria-label="Close "></button>
                  </div>
                  
                  
                  <div className="modal-body ">
                      
                      <form className="row g-4 ">
                          
                          <div className="col-12 ">
                              <label className="form-label ">Title</label>
                              <input type="email " className="form-control " placeholder="Event name here " />
                          </div>
                          
                          <div className="col-12 ">
                              <label className="form-label ">Description</label>
                              <textarea className="form-control " rows="2 " placeholder="Ex: topics, schedule, etc. "></textarea>
                          </div>
                          
                          <div className="col-sm-4 ">
                              <label className="form-label ">Date</label>
                              <input type="text " className="form-control flatpickr flatpickr-input " placeholder="Select date " readonly="readonly " />
                          </div>
                          
                          <div className="col-sm-4 ">
                              <label className="form-label ">Time</label>
                              <input type="text " className="form-control flatpickr flatpickr-input " data-enabletime="true " data-nocalendar="true " placeholder="Select time " readonly="readonly " />
                          </div>
                          
                          <div className="col-sm-4 ">
                              <label className="form-label ">Duration</label>
                              <input type="email " className="form-control " placeholder="1hr 23m " />
                          </div>
                          
                          <div className="col-12 ">
                              <label className="form-label ">Location</label>
                              <input type="email " className="form-control " placeholder="Logansport, IN 46947 " />
                          </div>
                          
                          <div className="col-12 ">
                              <label className="form-label ">Add guests</label>
                              <input type="email " className="form-control " placeholder="Guest email " />
                          </div>
                          
                          <div className="col-12 mt-3 ">
                              <ul className="avatar-group list-unstyled align-items-center mb-0 ">
                                  <li className="avatar avatar-xs ">
                                      <img className="avatar-img rounded-circle " src="./themes_files/assets/images/01.jpg " alt="avatar " />
                                  </li>
                                  <li className="avatar avatar-xs ">
                                      <img className="avatar-img rounded-circle " src="./themes_files/assets/images/02.jpg " alt="avatar " />
                                  </li>
                                  <li className="avatar avatar-xs ">
                                      <img className="avatar-img rounded-circle " src="./themes_files/assets/images/03.jpg " alt="avatar " />
                                  </li>
                                  <li className="avatar avatar-xs ">
                                      <img className="avatar-img rounded-circle " src="./themes_files/assets/images/04.jpg " alt="avatar " />
                                  </li>
                                  <li className="avatar avatar-xs ">
                                      <img className="avatar-img rounded-circle " src="./themes_files/assets/images/05.jpg " alt="avatar " />
                                  </li>
                                  <li className="avatar avatar-xs ">
                                      <img className="avatar-img rounded-circle " src="./themes_files/assets/images/06.jpg " alt="avatar " />
                                  </li>
                                  <li className="avatar avatar-xs ">
                                      <img className="avatar-img rounded-circle " src="./themes_files/assets/images/07.jpg " alt="avatar " />
                                  </li>
                                  <li className="ms-3 ">
                                      <small> +50 </small>
                                  </li>
                              </ul>
                          </div>
                          
                          
                          <div>
                              <label className="form-label ">Upload attachment</label>
                              <div className="dropzone dropzone-default card shadow-none dz-clickable " data-dropzone="{&quot;maxFiles&quot;:2} ">
                                  <div className="dz-message ">
                                      <i className="bi bi-file-earmark-text display-3 "></i>
                                      <p>Drop presentation and document here or click to upload.</p>
                                  </div>
                              </div>
                          </div>
                          
                      </form>
                      
                  </div>
                  
                  
                  
                  <div className="modal-footer ">
                      <button type="button " className="btn btn-danger-soft me-2 " data-bs-dismiss="modal "> Cancel</button>
                      <button type="button " className="btn btn-success-soft ">Create now</button>
                  </div>
              </div>
          </div>
      </div>
      

      
      <input type="file " multiple="multiple " className="dz-hidden-input " tabindex="-1 " style="visibility: hidden; position: absolute; top: 0px; left: 0px; height: 0px; width: 0px; " />
      <input type="file " multiple="multiple " className="dz-hidden-input " tabindex="-1 " style="visibility: hidden; position: absolute; top: 0px; left: 0px; height: 0px; width: 0px; " />
      <input type="file " multiple="multiple " className="dz-hidden-input " tabindex="-1 " style="visibility: hidden; position: absolute; top: 0px; left: 0px;height: 0px; width: 0px; " />
      <div className="flatpickr-calendar animate " tabindex="-1 ">
          <div className="flatpickr-months ">
              <span className="flatpickr-prev-month ">
                          <svg version="1.1 " xmlns="http://www.w3.org/2000/svg " xmlns:xlink="http://www.w3.org/1999/xlink " viewBox="0 0 17 17 "><g></g><path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z "></path></svg></span>
              <div className="flatpickr-month ">
                  <div className="flatpickr-current-month ">
                      <select className="flatpickr-monthDropdown-months " aria-label="Month " tabindex="-1 "><option className="flatpickr-monthDropdown-month " value="0 " tabindex="-1 ">January</option><option className="flatpickr-monthDropdown-month
                                                  " value="1 " tabindex="-1 ">February</option><option className="flatpickr-monthDropdown-month " value="2 " tabindex="-1 ">March</option><option className="flatpickr-monthDropdown-month " value="3 " tabindex="-1
                                                  ">April</option><option className="flatpickr-monthDropdown-month " value="4 " tabindex="-1 ">May</option><option className="flatpickr-monthDropdown-month " value="5 " tabindex="-1 ">June</option><option className="flatpickr-monthDropdown-month
                                                  " value="6 " tabindex="-1 ">July</option><option className="flatpickr-monthDropdown-month " value="7 " tabindex="-1 ">August</option><option className="flatpickr-monthDropdown-month " value="8 " tabindex="-1
                                                  ">September</option><option className="flatpickr-monthDropdown-month " value="9 " tabindex="-1 ">October</option><option className="flatpickr-monthDropdown-month " value="10 " tabindex="-1 ">November</option><option className="flatpickr-monthDropdown-month
                                                  " value="11 " tabindex="-1 ">December</option></select>
                      <div className="numInputWrapper "><input className="numInput cur-year " type="number " tabindex="-1 " aria-label="Year " /><span className="arrowUp "></span><span className="arrowDown "></span></div>
                  </div>
              </div><span className="flatpickr-next-month "><svg version="1.1 " xmlns="http://www.w3.org/2000/svg " xmlns:xlink="http://www.w3.org/1999/xlink " viewBox="0 0 17 17 "><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148
                                                  0.707-0.707 7.854 7.854z "></path></svg></span></div>
          <div className="flatpickr-innerContainer ">
              <div className="flatpickr-rContainer ">
                  <div className="flatpickr-weekdays ">
                      <div className="flatpickr-weekdaycontainer ">
                          <span className="flatpickr-weekday ">
                  Sun</span><span className="flatpickr-weekday ">Mon</span><span className="flatpickr-weekday ">Tue</span><span className="flatpickr-weekday ">Wed</span><span className="flatpickr-weekday ">Thu</span><span className="flatpickr-weekday ">Fri</span>
                          <span className="flatpickr-weekday ">Sat
                                      </span>
                      </div>
                  </div>
                  <div className="flatpickr-days " tabindex="-1 ">
                      <div className="dayContainer "><span className="flatpickr-day " aria-label="January 1, 2023 " tabindex="-1 ">1</span><span className="flatpickr-day " aria-label="January 2, 2023 " tabindex="-1 ">2</span><span className="flatpickr-day
                                                  " aria-label="January 3, 2023 " tabindex="-1 ">3</span>
                          <span className="flatpickr-day " aria-label="January 4, 2023 " tabindex="-1 ">4</span><span className="flatpickr-day " aria-label="January 5, 2023 " tabindex="-1 ">5</span><span className="flatpickr-day " aria-label="January 6, 2023
                                                  " tabindex="-1 ">6</span>
                          <span className="flatpickr-day today " aria-label="January 7, 2023 " aria-current="date " tabindex="-1 ">7</span><span className="flatpickr-day " aria-label="January 8, 2023 " tabindex="-1 ">8</span><span className="flatpickr-day
                                                  " aria-label="January 9, 2023 " tabindex="-1 ">9</span><span className="flatpickr-day " aria-label="January 10, 2023 " tabindex="-1 ">10</span><span className="flatpickr-day " aria-label="January 11, 2023 "
                              tabindex="-1 ">11</span>
                          <span className="flatpickr-day " aria-label="January 12, 2023 " tabindex="-1 ">12</span>
                          <span className="flatpickr-day " aria-label="January 13, 2023 " tabindex="-1 ">13</span><span className="flatpickr-day " aria-label="January 14, 2023 " tabindex="-1 ">14</span><span className="flatpickr-day " aria-label="January 15,
                                                  2023 " tabindex="-1 ">15</span>
                          <span className="flatpickr-day " aria-label="January 16, 2023 " tabindex="-1 ">16</span><span className="flatpickr-day " aria-label="January 17, 2023 " tabindex="-1 ">17</span><span className="flatpickr-day " aria-label="January 18,
                                                  2023 " tabindex="-1 ">18</span>
                          <span className="flatpickr-day " aria-label="January 19, 2023 " tabindex="-1 ">19</span><span className="flatpickr-day " aria-label="January 20, 2023 " tabindex="-1 ">20</span><span className="flatpickr-day " aria-label="January 21,
                                                  2023 " tabindex="-1 ">21</span>
                          <span className="flatpickr-day " aria-label="January 22, 2023 " tabindex="-1 ">22</span><span className="flatpickr-day " aria-label="January 23, 2023 " tabindex="-1 ">23</span><span className="flatpickr-day " aria-label="January 24,
                                                  2023 " tabindex="-1 ">24</span>
                          <span className="flatpickr-day " aria-label="January 25, 2023 " tabindex="-1 ">25</span><span className="flatpickr-day " aria-label="January 26, 2023 " tabindex="-1 ">26</span><span className="flatpickr-day " aria-label="January 27,
                                                  2023 " tabindex="-1 ">27</span>
                          <span className="flatpickr-day " aria-label="January 28, 2023 " tabindex="-1 ">28</span><span className="flatpickr-day " aria-label="January 29, 2023 " tabindex="-1 ">29</span><span className="flatpickr-day " aria-label="January 30,
                                                  2023 " tabindex="-1 ">30</span>
                          <span className="flatpickr-day " aria-label="January 31, 2023 " tabindex="-1 ">31</span><span className="flatpickr-day nextMonthDay " aria-label="February 1, 2023 " tabindex="-1 ">1</span><span className="flatpickr-day nextMonthDay
                                                  " aria-label="February 2, 2023 " tabindex="-1 ">2</span><span className="flatpickr-day nextMonthDay " aria-label="February 3, 2023 " tabindex="-1 ">3</span><span className="flatpickr-day nextMonthDay " aria-label="February 4, 2023 "
                              tabindex="-1 ">4</span>
                          <span className="flatpickr-day nextMonthDay " aria-label="February 5, 2023 " tabindex="-1 ">5</span>
                          <span className="flatpickr-day nextMonthDay " aria-label="February 6, 2023 " tabindex="-1 ">6</span><span className="flatpickr-day nextMonthDay " aria-label="February 7, 2023 " tabindex="-1 ">7</span><span className="flatpickr-day nextMonthDay "
                              aria-label="February 8, 2023 " tabindex="-1 ">8</span><span className="flatpickr-day nextMonthDay " aria-label="February 9, 2023 " tabindex="-1 ">9</span><span className="flatpickr-day nextMonthDay " aria-label="February 10,
                                                  2023 " tabindex="-1 ">10</span>
                          <span className="flatpickr-day nextMonthDay " aria-label="February 11, 2023 " tabindex="-1 ">11</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="flatpickr-calendar hasTime noCalendar animate " tabindex="-1 ">
          <div className="flatpickr-time " tabindex="-1 ">
              <div className="numInputWrapper ">
                  <input className="numInput flatpickr-hour " type="number " aria-label="Hour " tabindex="-1 " step="1 " min="1 " max="12 " maxlength="2 " />
                  <span className="arrowUp "></span>
                  <span className="arrowDown "></span>
              </div>
              <span className="flatpickr-time-separator ">:</span>
              <div className="numInputWrapper " >
                  <input className="numInput flatpickr-minute " type="number " aria-label="Minute " tabindex="-1 " step="5 " min="0 " max="59 " maxlength="2 " />
                  <span className="arrowUp "></span>
                  <span className="arrowDown "></span>
              </div>
              <span className="flatpickr-am-pm " title="Click to toggle " tabindex="-1 ">PM</span>

          </div>
      </div>
    </div>
  )
}

export default Home
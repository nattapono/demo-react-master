import React from 'react'
import {useNavigate , Link} from 'react-router-dom'
function Home({login}) {
    let navigate = useNavigate()
  return (
    <div>
      <div style={{height:'75px'}}>
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
                                      
                                      <div className="h-50px" style={{backgroundImage:'url(src/assets/images/bg/01.jpg)', backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat:' no-repeat'}}></div>
                                      
                                      <div className="card-body pt-0">
                                          <div className="text-center">
                                              
                                              <div className="avatar avatar-lg mt-n5 mb-3">
                                                  <Link to="https://social.webestica.com/index.html#!"><img className="avatar-img rounded border border-white border-3" src="./src/assets/images/07.jpg" alt="" /></Link>
                                              </div>
                                              
                                              <h5 className="mb-0"> <Link to="https://social.webestica.com/index.html#!">Sam Lanson </Link> </h5>
                                              <small>Web Developer at Webestica</small>
                                              <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>

                                              
                                              <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                                  
                                                
                                                  <div>
                                                      <h6 className="mb-0">2.5K</h6>
                                                      <small>Followers</small>
                                                  </div>
                                                  
                                                  <div className="vr"></div>
                                                  
                                                  <div>
                                                      <h6 className="mb-0">365</h6>
                                                      <small>Following</small>
                                                  </div>

                                                  <div className="vr"></div>

                                                  <div>
                                                      <h6 className="mb-0">256</h6>
                                                      <small>Post</small>
                                                  </div>
                                              </div>
                                              
                                          </div>

                                          
                                          <hr />

                                          
                                          <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/my-profile.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/home-outline-filled.svg" alt="" /><span>Feed </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/my-profile-connections.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/person-outline-filled.svg" alt="" /><span>Connections </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/blog.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/earth-outline-filled.svg" alt="" /><span>Latest News </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/events.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/calendar-outline-filled.svg" alt="" /><span>Events </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/groups.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/chat-outline-filled.svg" alt="" /><span>Groups </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/notifications.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/notification-outlined-filled.svg" alt="" /><span>Notifications </span></Link>
                                              </li>
                                              <li className="nav-item">
                                                  <Link className="nav-link" to="https://social.webestica.com/settings.html"> <img className="me-2 h-20px fa-fw" src="./src/assets/svg/cog-outline-filled.svg" alt="" /><span>Settings </span></Link>
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
                                    <div className="tiny-slider-inner ms-n4  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal d-flex align-items-center" data-arrow="true" data-dots="true" data-loop="false" data-autoplay="false" data-items-xl="4" data-items-lg="3" data-items-md="3" data-items-sm="3" data-items-xs="2"
                                          data-gutter="12" data-edge="30" id="tns1" style={{transitionDuration: '0s', transform: 'translate3d(0%, 0px, 0px)'}}>
                                          
                                        <div className="tns-item tns-slide-active ms-4 me-1" id="tns1-item0">
                                              
                                            <div className="card border border-2 border-dashed h-150px shadow-none d-flex align-items-center justify-content-center text-center" style={{minWidth: '100px'}}>
                                                <div>
                                                    <Link className="stretched-link btn btn-light rounded-circle icon-md " to="https://social.webestica.com/index.html#! " style={{border: '#bb9439 1px dashed'}}>
                                                        +
                                                    </Link>
                                                    <h6 className="mt-2 mb-0 small ">Post a Story</h6>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div style={{overflow:'auto',width:'550px'}} className="d-flex align-items-center">
                                            <div className="tns-item tns-slide-active mx-1 " id="tns1-item1 ">
                                                
                                                <div className="card card-overlay-bottom border-0 position-relative h-150px " style={{minWidth:' 100px',backgroundImage:'url(./src/assets/images/post/1by1/02.jpg)', backgroundPosition: 'center left',backgroundSize: 'cover' }}>
                                                    <div className="card-img-overlay d-flex align-items-center p-2 ">
                                                        <div className="w-100 mt-auto ">
                                                            
                                                            <Link to="https://social.webestica.com/index.html#! " className="stretched-link text-white small ">Judy Nguyen</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            
                                            <div className="tns-item tns-slide-active mx-1 " id="tns1-item2 ">
                                                
                                                <div className="card card-overlay-bottom border-0 position-relative h-150px " style={{minWidth: '100px',backgroundImage:'url(./src/assets/images/post/1by1/03.jpg)',backgroundPosition: 'center left',backgroundSize: 'cover'}}>
                                                    <div className="card-img-overlay d-flex align-items-center p-2 ">
                                                        <div className="w-100 mt-auto ">
                                                            
                                                            <Link to="https://social.webestica.com/index.html#! " className="stretched-link text-white small ">Samuel Bishop</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            
                                            <div className="tns-item tns-slide-active mx-1 " id="tns1-item3 ">
                                                
                                                <div className="card card-overlay-bottom border-0 position-relative h-150px " style={{minWidth: '100px',backgroundImage:'url(./src/assets/images/post/1by1/04.jpg)',backgroundPosition: 'center left',backgroundSize: 'cover'}}>
                                                    <div className="card-img-overlay d-flex align-items-center p-2 ">
                                                        <div className="w-100 mt-auto ">
                                                            
                                                            <Link to="https://social.webestica.com/index.html#! " className="stretched-link text-white small ">Carolyn Ortiz</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            
                                            <div className="tns-item tns-slide-active mx-1 " id="tns1-item4 ">
                                                
                                                <div className="card card-overlay-bottom border-0 position-relative h-150px " style={{minWidth: '100px',backgroundImage:'url(./src/assets/images/post/1by1/05.jpg)',backgroundPosition: 'center left',backgroundSize: 'cover'}}>
                                                    <div className="card-img-overlay d-flex align-items-center p-2 ">
                                                        <div className="w-100 mt-auto ">
                                                            
                                                            <Link to="https://social.webestica.com/index.html#! " className="stretched-link text-white small ">Amanda Reed</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            
                                            <div className="tns-item mx-1" id="tns1-item5 " aria-hidden="true " tabindex="-1 ">
                                                
                                                <div className="card card-overlay-bottom border-0 position-relative h-150px " style={{minWidth: '100px',backgroundImage:'url(./src/assets/images/post/1by1/06.jpg)',backgroundPosition: 'center left',backgroundSize: 'cover'}}>
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
                            </div>
                            <div className="tns-nav " aria-label="Carousel Pagination "><button type="button " data-nav="0 " aria-controls="tns1 " aria-label="Carousel Page 1 (Current Slide) " className="tns-nav-active "></button>
                                <button type="button " data-nav="1 " tabindex="-1 " aria-controls="tns1 " aria-label="Carousel Page 2 "></button>
                                <button type="button " data-nav="2 " tabindex="-1 " aria-controls="tns1 " style={{display:'none'}} aria-label="Carousel Page 3 "></button><button type="button " data-nav="3 " tabindex="-1 " aria-controls="tns1
                                                " style={{display:'none'}} aria-label="Carousel Page 4 "></button>
                                <button type="button " data-nav="4 " tabindex="-1 " aria-controls="tns1 " style={{display:'none'}} aria-label="Carousel Page 5 "></button><button type="button " data-nav="5 " tabindex="-1 " aria-controls="tns1
                                                " style={{display:'none'}} aria-label="Carousel Page 6 "></button>
                            </div>
                        </div>
              </div>
              <div className="card card-body ">
                          <div className="d-flex mb-3 ">
                              
                              <div className="avatar avatar-xs me-2 ">
                                  <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./src/assets/images/03.jpg " alt=" " /> </Link>
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
                                          <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./src/assets/images/04.jpg " alt=" " /> </Link>
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
                              
                              <img className="card-img " src="./src/assets/images/01(1).jpg " alt="Post " />
                              
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
                                      <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./src/assets/images/12.jpg " alt=" " /> </Link>
                                  </div>
                                  
                                  <form className="w-100 ">
                                      <textarea data-autoresize=" " className="form-control pe-4 bg-light " rows="1 " placeholder="Add a comment... "></textarea>
                                  </form>
                              </div>
                              
                              <ul className="comment-wrap list-unstyled ">
                                  
                                  <li className="comment-item ">
                                      <div className="d-flex position-relative ">
                                          
                                          <div className="avatar avatar-xs ">
                                              <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/05.jpg " alt=" " /></Link>
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
                                                      <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/06.jpg " alt=" " /></Link>
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
                                                      <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/07.jpg " alt=" " /></Link>
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
                                              <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/05.jpg " alt=" " /></Link>
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
                                          <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./src/assets/images/12.svg " alt=" " /> </Link>
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
                          <img src="./src/assets/images/02(1).jpg " alt=" " />
                          
                          
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
                                  <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./src/assets/images/13.svg " alt=" " /> </Link>
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
                                    <div className="tiny-slider-inner ms-n4 tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal " data-arrow="true " data-dots="false " data-items-xl="3 " data-items-lg="2 " data-items-md="2" data-items-sm="2 " data-items-xs="1 " data-gutter="12 " data-edge="30 " id="tns2 " style={{transform: 'translate3d(-61.1111%, 0px, 0px)' }}>
                                        <div className="tns-item tns-slide-cloned " aria-hidden="true " tabindex="-1 ">
                                            
                                            <div className="card shadow-none text-center ">
                                                
                                                <div className="card-body p-2 pb-0 ">
                                                    <div className="avatar avatar-story avatar-xl ">
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/12.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/09.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/12.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/09.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
                                                    </div>
                                                    <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                    <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                                </div>
                                                
                                                <div className="card-footer p-2 border-0 ">
                                                    <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="tns-item tns-slide-active mx-1" id="tns2-item3 ">
                                            
                                            <div className="card shadow-none text-center ">
                                                
                                                <div className="card-body p-2 pb-0 ">
                                                    <div className="avatar avatar-xl ">
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/12.jpg " alt=" " /></Link>
                                                    </div>
                                                    <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Dennis Barrett </Link></h6>
                                                    <p className="mb-0 small lh-sm ">21 mutual connections</p>
                                                </div>
                                                
                                                <div className="card-footer p-2 border-0 ">
                                                    <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="tns-item tns-slide-cloned tns-slide-active mx-1 ">
                                            
                                            <div className="card shadow-none text-center ">
                                                
                                                <div className="card-body p-2 pb-0 ">
                                                    <div className="avatar avatar-xl ">
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/09.jpg " alt=" " /></Link>
                                                    </div>
                                                    <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Amanda Reed </Link></h6>
                                                    <p className="mb-0 small lh-sm ">50 mutual connections</p>
                                                </div>
                                                
                                                <div className="card-footer p-2 border-0 ">
                                                    <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="tns-item tns-slide-cloned tns-slide-active mx-1 ">
                                            
                                            <div className="card shadow-none text-center ">
                                                
                                                <div className="card-body p-2 pb-0 ">
                                                    <div className="avatar avatar-story avatar-xl ">
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
                                                    </div>
                                                    <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Larry Lawson </Link></h6>
                                                    <p className="mb-0 small lh-sm ">33 mutual connections</p>
                                                </div>
                                                
                                                <div className="card-footer p-2 border-0 ">
                                                    <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="tns-item tns-slide-cloned tns-slide-active mx-1 ">
                                            
                                            <div className="card shadow-none text-center ">
                                                
                                                <div className="card-body p-2 pb-0 ">
                                                    <div className="avatar avatar-xl ">
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
                                                    </div>
                                                    <h6 className="card-title mb-1 mt-3 "> <Link to="https://social.webestica.com/index.html#! "> Louis Crawford </Link></h6>
                                                    <p className="mb-0 small lh-sm ">45 mutual connections</p>
                                                </div>
                                                
                                                <div className="card-footer p-2 border-0 ">
                                                    <button className="btn btn-sm btn-primary-soft w-100 "> Add friend </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="tns-item tns-slide-cloned tns-slide-active mx-1 ">
                                            
                                            <div className="card shadow-none text-center ">
                                                
                                                <div className="card-body p-2 pb-0 ">
                                                    <div className="avatar avatar-xl ">
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/12.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/09.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/10.jpg " alt=" " /></Link>
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
                                                        <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /></Link>
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
                            <div className="tns-controls " aria-label="Carousel Navigation " tabindex="0 "><button type="button " data-controls="prev " tabindex="-1 " aria-controls="tns2 "><i className="fa-solid fa-chevron-left"></i></button><button type="button " data-controls="next " tabindex="-1 " aria-controls="tns2 "><i className="fa-solid fa-chevron-right "></i></button></div>
                        </div>
                    </div>
                </div>
                
              </div>

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
                                              <Link to="https://social.webestica.com/index.html#! "><img className="avatar-img rounded-circle " src="./src/assets/images/04.jpg " alt=" " /></Link>
                                          </div>
                                          
                                          <div className="overflow-hidden ">
                                              <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Judy Nguyen </Link>
                                              <p className="mb-0 small text-truncate ">News anchor</p>
                                          </div>
                                          
                                          <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                      </div>
                                      
                                      
                                      <div className="hstack gap-2 mb-3 ">
                                          
                                          <div className="avatar avatar-story ">
                                              <Link to="https://social.webestica.com/index.html#! "> <img className="avatar-img rounded-circle " src="./src/assets/images/05.jpg " alt=" " /> </Link>
                                          </div>
                                          
                                          <div className="overflow-hidden ">
                                              <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Amanda Reed </Link>
                                              <p className="mb-0 small text-truncate ">Web Developer</p>
                                          </div>
                                          
                                          <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                      </div>
                                      

                                      
                                      <div className="hstack gap-2 mb-3 ">
                                          
                                          <div className="avatar ">
                                              <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./src/assets/images/11.jpg " alt=" " /> </Link>
                                          </div>
                                          
                                          <div className="overflow-hidden ">
                                              <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Billy Vasquez </Link>
                                              <p className="mb-0 small text-truncate ">News anchor</p>
                                          </div>
                                          
                                          <Link className="btn btn-primary rounded-circle icon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="bi bi-person-check-fill "> </i></Link>
                                      </div>
                                      

                                      
                                      <div className="hstack gap-2 mb-3 ">
                                          
                                          <div className="avatar ">
                                              <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./src/assets/images/01.jpg " alt=" " /> </Link>
                                          </div>
                                          
                                          <div className="overflow-hidden ">
                                              <Link className="h6 mb-0 " to="https://social.webestica.com/index.html#! ">Lori Ferguson </Link>
                                              <p className="mb-0 small text-truncate ">Web Developer at Webestica</p>
                                          </div>
                                          
                                          <Link className="btn btn-primary-soft rounded-circle icon-md ms-auto " to="https://social.webestica.com/index.html# "><i className="fa-solid fa-plus "> </i></Link>
                                      </div>
                                      

                                      
                                      <div className="hstack gap-2 mb-3 ">
                                          
                                          <div className="avatar ">
                                              <Link to="https://social.webestica.com/index.html# "> <img className="avatar-img rounded-circle " src="./src/assets/images/placeholder.jpg " alt=" " /> </Link>
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
    </div>
    
  )
}

export default Home
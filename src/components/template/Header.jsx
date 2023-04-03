import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <header className="large navbar-light fixed-top header-static bg-mode">
            
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    
                    <Link className="navbar-brand" to="https://social.webestica.com/index.html">
                        <img className="light-mode-item navbar-brand-item" src="./themes_files/assets/svg/logo.svg" alt="logo" />
                        <img className="dark-mode-item navbar-brand-item" src="./themes_files/assets/svg/logo.svg" alt="logo" />
                    </Link>
                    

                    
                    <button className="navbar-toggler ms-auto icon-md btn btn-light p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-animation">
                        <span></span>
                        <span></span>
                        <span></span>
                        </span>
                    </button>

                    
                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        
                        <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
                            <div className="nav-item w-100">
                                <form className="rounded position-relative">
                                    <input className="form-control ps-5 bg-light border-dashed " type="search" placeholder="Search..." aria-label="Search" />
                                    <button className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i className="bi bi-search fs-5"> </i></button>
                                </form>
                            </div>
                        </div>
                        

                        <ul className="navbar-nav navbar-nav-scroll ms-auto">
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="https://social.webestica.com/index.html#" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demo</a>
                                <ul className="dropdown-menu" aria-labelledby="homeMenu">
                                    <li> <a className="dropdown-item active" href="https://social.webestica.com/index.html">Home default</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/index-classic.html">Home classic</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/index-post.html">Home post</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/index-video.html">Home video</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/index-event.html">Home event</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/landing.html">Landing page</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/app-download.html">App download</a></li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <a className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                                            <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy Social!
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://social.webestica.com/index.html#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/albums.html">Albums</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/celebration.html">Celebration</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/messaging.html">Messaging</a></li>
                                    
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-toggle" href="https://social.webestica.com/index.html#!">Profile</a>
                                        <ul className="dropdown-menu" data-bs-popper="none">
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/my-profile.html">Feed</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/my-profile-about.html">About</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/my-profile-connections.html">Connections</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/my-profile-media.html">Media</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/my-profile-videos.html">Videos</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/my-profile-events.html">Events</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/my-profile-activity.html">Activity</a> </li>
                                        </ul>
                                    </li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/events.html">Events</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/events-2.html">Events 2</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/event-details.html">Event details</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/event-details-2.html">Event details 2</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/groups.html">Groups</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/group-details.html">Group details</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/post-videos.html">Post videos</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/post-video-details.html">Post video details</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/post-details.html">Post details</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/video-details.html">Video details</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/blog.html">Blog</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/blog-details.html">Blog details</a></li>

                                    
                                    <li className="dropdown-divider"></li>
                                    <li className="dropdown-submenu dropend">
                                        <a className="dropdown-item dropdown-toggle" href="https://social.webestica.com/index.html#">Dropdown levels</a>
                                        <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/index.html#">Dropdown item</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/index.html#">Dropdown item</a> </li>
                                            
                                            <li className="dropdown-submenu dropstart">
                                                <a className="dropdown-item dropdown-toggle" href="https://social.webestica.com/index.html#">Dropdown (start)</a>
                                                <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                                    <li> <a className="dropdown-item" href="https://social.webestica.com/index.html#">Dropdown item</a> </li>
                                                    <li> <a className="dropdown-item" href="https://social.webestica.com/index.html#">Dropdown item</a> </li>
                                                </ul>
                                            </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/index.html#">Dropdown item</a> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://social.webestica.com/index.html#" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account </a>
                                <ul className="dropdown-menu" aria-labelledby="postMenu">
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/create-page.html">Create a page</a></li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/settings.html">Settings</a> </li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/notifications.html">Notifications</a> </li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/help.html">Help center</a> </li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/help-details.html">Help details</a> </li>
                                    
                                    <li className="dropdown-submenu dropstart">
                                        <a className="dropdown-item dropdown-toggle" href="https://social.webestica.com/index.html#">Authentication</a>
                                        <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/sign-in.html">Sign in</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/sign-up.html">Sing up</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/forgot-password.html">Forgot password</a> </li>
                                            <li className="dropdown-divider"></li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/sign-in-advance.html">Sign in advance</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/sign-up-advance.html">Sing up advance</a> </li>
                                            <li> <a className="dropdown-item" href="https://social.webestica.com/forgot-password-advance.html">Forgot password advance</a> </li>
                                        </ul>
                                    </li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/error-404.html">Error 404</a> </li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/offline.html">Offline</a> </li>
                                    <li> <a className="dropdown-item" href="https://social.webestica.com/privacy-and-terms.html">Privacy &amp; terms</a> </li>
                                </ul>
                            </li>

                            
                            <li className="nav-item">
                                <a className="nav-link" href="https://social.webestica.com/my-profile-connections.html">My network</a>
                            </li>
                        </ul>
                    </div>
                    

                    
                    <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
                        <li className="nav-item ms-2">
                            <a className="nav-link icon-md btn btn-light p-0" href="https://social.webestica.com/messaging.html">
                                <i className="bi bi-chat-left-text-fill fs-6"> </i>
                            </a>
                        </li>
                        <li className="nav-item ms-2">
                            <a className="nav-link icon-md btn btn-light p-0" href="https://social.webestica.com/settings.html">
                                <i className="bi bi-gear-fill fs-6"> </i>
                            </a>
                        </li>
                        <li className="nav-item dropdown ms-2">
                            <a className="nav-link icon-md btn btn-light p-0" href="https://social.webestica.com/index.html#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                <span className="badge-notif animation-blink"></span>
                                <i className="bi bi-bell-fill fs-6"> </i>
                            </a>
                            <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0" aria-labelledby="notifDropdown">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span></h6>
                                        <a className="small" href="https://social.webestica.com/index.html#">Clear all</a>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush list-unstyled p-2">
                                            
                                            <li>
                                                <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3">
                                                    <div className="avatar text-center d-none d-sm-inline-block">
                                                        <img className="avatar-img rounded-circle" src="./themes_files/01.jpg" alt="" />
                                                    </div>
                                                    <div className="ms-sm-3">
                                                        <div className=" d-flex">
                                                            <p className="small mb-2"><b>Judy Nguyen</b> sent you a friend request.</p>
                                                            <p className="small ms-3 text-nowrap">Just now</p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <button className="btn btn-sm py-1 btn-primary me-2">Accept </button>
                                                            <button className="btn btn-sm py-1 btn-danger-soft">Delete </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            <li>
                                                <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                                                    <div className="avatar text-center d-none d-sm-inline-block">
                                                        <img className="avatar-img rounded-circle" src="./themes_files/assets/images/02.jpg" alt="" />
                                                    </div>
                                                    <div className="ms-sm-3 d-flex">
                                                        <div>
                                                            <p className="small mb-2">Wish <b>Amanda Reed</b> a happy birthday (Nov 12)</p>
                                                            <button className="btn btn-sm btn-outline-light py-1 me-2">Say happy birthday 🎂</button>
                                                        </div>
                                                        <p className="small ms-3">2min</p>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            <li>
                                                <a href="https://social.webestica.com/index.html#" className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3">
                                                    <div className="avatar text-center d-none d-sm-inline-block">
                                                        <div className="avatar-img rounded-circle bg-success"><span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span></div>
                                                    </div>
                                                    <div className="ms-sm-3">
                                                        <div className="d-flex">
                                                            <p className="small mb-2">Webestica has 15 like and 1 new activity</p>
                                                            <p className="small ms-3">1hr</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            
                                            <li>
                                                <a href="https://social.webestica.com/index.html#" className="list-group-item list-group-item-action rounded d-flex border-0 p-3 mb-1">
                                                    <div className="avatar text-center d-none d-sm-inline-block">
                                                        <img className="avatar-img rounded-circle" src="./themes_files/assets/svg/12.svg" alt="" />
                                                    </div>
                                                    <div className="ms-sm-3 d-flex">
                                                        <p className="small mb-2"><b>Bootstrap in the news:</b> The search giant’s parent company, Alphabet, just joined an exclusive club of tech stocks.</p>
                                                        <p className="small ms-3">4hr</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer text-center">
                                        <a href="https://social.webestica.com/index.html#" className="btn btn-sm btn-primary-soft">See all incoming activity</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        

                        <li className="nav-item ms-2 dropdown">
                            <a className="nav-link btn icon-md p-0" href="https://social.webestica.com/index.html#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="avatar-img rounded-2" src="./themes_files/assets/images/07.jpg" alt="" />
                            </a>
                            <ul className="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3" aria-labelledby="profileDropdown">
                                
                                <li className="px-3">
                                    <div className="d-flex align-items-center position-relative">
                                        
                                        <div className="avatar me-3">
                                            <img className="avatar-img rounded-circle" src="./themes_files/assets/images/07.jpg" alt="avatar" />
                                        </div>
                                        <div>
                                            <a className="h6 stretched-link" href="https://social.webestica.com/index.html#">Lori Ferguson</a>
                                            <p className="small m-0">Web Developer</p>
                                        </div>
                                    </div>
                                    <a className="dropdown-item btn btn-primary-soft btn-sm my-2 text-center" href="https://social.webestica.com/my-profile.html">View profile</a>
                                </li>
                                
                                <li><a className="dropdown-item" href="https://social.webestica.com/settings.html"><i className="bi bi-gear fa-fw me-2"></i>Settings &amp; Privacy</a></li>
                                <li>
                                    <a className="dropdown-item" href="https://support.webestica.com/" target="_blank">
                                        <i className="fa-fw bi bi-life-preserver me-2"></i>Support
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="https://social.webestica.com/docs/index.html" target="_blank">
                                        <i className="fa-fw bi bi-card-text me-2"></i>Documentation
                                    </a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li><a className="dropdown-item bg-danger-soft-hover" href="https://social.webestica.com/sign-in-advance.html"><i className="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                
                                <li>
                                    <div className="modeswitch-wrap" id="darkModeSwitch">
                                        <div className="modeswitch-item">
                                            <div className="modeswitch-icon"></div>
                                        </div>
                                        <span>Dark mode</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
  )
}

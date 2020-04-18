import React,{Fragment} from 'react'

export default function FriendList() {
    return (
        <Fragment>
                        <div className="tab-pane fade" id="friends" role="tabpanel">
                <div className="iq-card">
                  <div className="iq-card-body">
                    <h2>Friends</h2>
                    <div className="friend-list-tab mt-2">
                      <ul className="nav nav-pills d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                        <li>
                          <a className="nav-link active" data-toggle="pill" href="#all-friends">All Friends</a>
                        </li>
                        <li>
                          <a className="nav-link" data-toggle="pill" href="#recently-add">Recently Added</a>
                        </li>
                        <li>
                          <a className="nav-link" data-toggle="pill" href="#closefriends">Close friends</a>
                        </li>
                        <li>
                          <a className="nav-link" data-toggle="pill" href="#home">Home/Town</a>
                        </li>
                        <li>
                          <a className="nav-link" data-toggle="pill" href="#following">Following</a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade active show" id="all-friends" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Petey Cruiser</h5>
                                        <p className="mb-0">15  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton01" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/06.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Anna Sthesia</h5>
                                        <p className="mb-0">50  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton02" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton02">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/07.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Paul Molive</h5>
                                        <p className="mb-0">10  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton03" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton03">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/08.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Gail Forcewind</h5>
                                        <p className="mb-0">20  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton04" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton04">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/09.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Paige Turner</h5>
                                        <p className="mb-0">12  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton05" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton05">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/10.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>b Frapples</h5>
                                        <p className="mb-0">6  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton06" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton06">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/13.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Walter Melon</h5>
                                        <p className="mb-0">30  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton07" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton07">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/14.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Barb Ackue</h5>
                                        <p className="mb-0">14  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton08" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton08">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/15.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Buck Kinnear</h5>
                                        <p className="mb-0">16  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton09" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton09">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/16.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Ira Membrit</h5>
                                        <p className="mb-0">22  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton10" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton10">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/17.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Shonda Leer</h5>
                                        <p className="mb-0">10  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton11" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton11">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/18.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>ock Lee</h5>
                                        <p className="mb-0">18  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton12" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton12">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/19.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Maya Didas</h5>
                                        <p className="mb-0">40  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton13" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton13">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Rick O'Shea</h5>
                                        <p className="mb-0">50  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton14" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton14">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/06.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Pete Sariya</h5>
                                        <p className="mb-0">5  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton15" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton15">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/07.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Monty Carlo</h5>
                                        <p className="mb-0">2  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton16" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton16">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/08.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Sal Monella</h5>
                                        <p className="mb-0">0  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton17" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton17">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/09.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Sue Vaneer</h5>
                                        <p className="mb-0">25  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton18" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton18">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/10.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Cliff Hanger</h5>
                                        <p className="mb-0">18  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton19" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton19">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Barb Dwyer</h5>
                                        <p className="mb-0">23  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton20" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton20">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/06.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Terry Aki</h5>
                                        <p className="mb-0">8  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton21" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton21">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/13.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Cory Ander</h5>
                                        <p className="mb-0">7  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton22" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton22">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/14.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Robin Banks</h5>
                                        <p className="mb-0">14  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton23" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton23">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/15.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Jimmy Changa</h5>
                                        <p className="mb-0">10  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton24" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton24">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/16.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Barry Wine</h5>
                                        <p className="mb-0">18  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton25" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton25">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/17.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Poppa Cherry</h5>
                                        <p className="mb-0">16  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton26" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton26">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/18.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Zack Lee</h5>
                                        <p className="mb-0">33  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton27" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton27">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/19.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Don Stairs</h5>
                                        <p className="mb-0">15  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton28" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton28">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Peter Pants</h5>
                                        <p className="mb-0">12  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton29" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton29">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/06.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Hal Appeno </h5>
                                        <p className="mb-0">13  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton30" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton30">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="recently-add" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/07.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Otto Matic</h5>
                                        <p className="mb-0">4  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton31" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton31">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/08.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Moe Fugga</h5>
                                        <p className="mb-0">16  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton32" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton32">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/09.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Tom Foolery</h5>
                                        <p className="mb-0">14  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton33" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton33">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/10.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Bud Wiser</h5>
                                        <p className="mb-0">16  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton34" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton34">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/15.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Polly Tech</h5>
                                        <p className="mb-0">10  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton35" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton35">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/16.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Holly Graham</h5>
                                        <p className="mb-0">8  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton36" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton36">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/17.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Tara Zona</h5>
                                        <p className="mb-0">5  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton37" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton37">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/18.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Barry Cade</h5>
                                        <p className="mb-0">20  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton38" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton38">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="closefriends" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/19.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Bud Wiser</h5>
                                        <p className="mb-0">32  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton39" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton39">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Otto Matic</h5>
                                        <p className="mb-0">9  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton40" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton40">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/06.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Peter Pants</h5>
                                        <p className="mb-0">2  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton41" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton41">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/07.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Zack Lee</h5>
                                        <p className="mb-0">15  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton42" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton42">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/08.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Barry Wine</h5>
                                        <p className="mb-0">36  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton43" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton43">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/09.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Robin Banks</h5>
                                        <p className="mb-0">22  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton44" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton44">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/10.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Cory Ander</h5>
                                        <p className="mb-0">18  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton45" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton45">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/15.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Moe Fugga</h5>
                                        <p className="mb-0">12  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton46" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton46">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/16.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Polly Tech</h5>
                                        <p className="mb-0">30  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton47" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton47">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/17.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Hal Appeno</h5>
                                        <p className="mb-0">25  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton48" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton48">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="home" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/18.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Paul Molive</h5>
                                        <p className="mb-0">14  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton49" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton49">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/19.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Paige Turner</h5>
                                        <p className="mb-0">8  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton50" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton50">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Barb Ackue</h5>
                                        <p className="mb-0">23  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton51" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton51">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/06.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Ira Membrit</h5>
                                        <p className="mb-0">16  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton52" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton52">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/07.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Maya Didas</h5>
                                        <p className="mb-0">12  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton53" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton53">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="following" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Maya Didas</h5>
                                        <p className="mb-0">20  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton54" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton54">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/06.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Monty Carlo</h5>
                                        <p className="mb-0">3  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton55" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton55">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/07.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Cliff Hanger</h5>
                                        <p className="mb-0">20  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton56" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton56">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/08.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>b Ackue</h5>
                                        <p className="mb-0">12  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton57" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton57">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/09.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Bob Frapples</h5>
                                        <p className="mb-0">12  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton58" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton58">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/10.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Anna Mull</h5>
                                        <p className="mb-0">6  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton59" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton59">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/15.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>ry Wine</h5>
                                        <p className="mb-0">15  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton60" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton60">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/16.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Don Stairs</h5>
                                        <p className="mb-0">12  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton61" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton61">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/17.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Peter Pants</h5>
                                        <p className="mb-0">8  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton62" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton62">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/18.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Polly Tech</h5>
                                        <p className="mb-0">18  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton63" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton63">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/19.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Tara Zona</h5>
                                        <p className="mb-0">30  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton64" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton64">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Arty Ficial</h5>
                                        <p className="mb-0">15  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton65" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton65">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/06.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Bill Emia</h5>
                                        <p className="mb-0">25  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton66" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton66">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/07.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Bill Yerds</h5>
                                        <p className="mb-0">9  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton67" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton67">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/08.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Matt Innae</h5>
                                        <p className="mb-0">19  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton68" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton68">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </Fragment>
    )
}

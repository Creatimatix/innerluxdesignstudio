document.getElementById('navbar_html').innerHTML = `
<div class="pbmit-main-header-area">
				<div class="container-fluid">
					<div class="pbmit-header-content d-flex justify-content-between align-items-center">
						<div class="site-branding">
							<h1 class="site-title">
								<a href="index.html">
									<img class="logo-img" src="images/logo.png" alt="Innerlux Design Studio" style="max-height: 83px !important;">
								</a>
							</h1>
						</div>
						<div class="pbmit-menuarea">
							<div class="site-navigation">
								<nav class="main-menu navbar-expand-xl navbar-light">
									<div class="navbar-header">
										<!-- Toggle Button --> 
										<button class="navbar-toggler" type="button">
											<i class="pbmit-base-icon-menu-1"></i>
										</button>
									</div>
									<div class="pbmit-mobile-menu-bg"></div>
									<div class="collapse navbar-collapse clearfix show" id="pbmit-menu">
										<div class="pbmit-menu-wrap">
											<span class="closepanel">
												<svg class="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163" height="20.163" viewBox="0 0 26.163 26.163">
													<rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
													<rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
												</svg>
											</span>
											<ul class="navigation clearfix menu_list">
												<li class="dropdown" id="home_link">
													<a href="index.html">Home</a>
												</li>
												<li class="dropdown" id="service_link">
													<a href="service-details.html">Services</a>
												</li>
												<li id="about_link"><a href="about-us.html">About Us</a></li>
												<li id="contact_us_link"><a href="contact-us.html">Contact Us</a></li>
											</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>`;


$( window ).on("load", function() {
    console.log(window.location.pathname.split("/")[1]);
    if(window.location.pathname.split("/")[1] === "index.html"){
        $("#home_link").addClass("active");
    }else if(window.location.pathname.split("/")[1] === "service-details.html"){
        $("#service_link").addClass("active");
    }else if(window.location.pathname.split("/")[1] === "about-us.html"){
        $("#about_link").addClass("active");
    }else if(window.location.pathname.split("/")[1] === "contact-us.html"){
        $("#contact_us_link").addClass("active");
    } 
});

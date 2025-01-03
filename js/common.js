document.getElementById('navbar_html').innerHTML = `
<div class="pbmit-main-header-area">
				<div class="container-fluid">
					<div class="pbmit-header-content d-flex justify-content-between align-items-center">
						<div class="site-branding">
							<h1 class="site-title">
								<a href="/">
									<img class="logo-img" src="images/logo.png" alt="InnerLux Design Studio" style="max-height: 83px !important;">
								</a>
							</h1>
						</div>
						<div class="pbmit-menuarea">
							<div class="site-navigation">
								<nav class="main-menu navbar-expand-xl navbar-light">
									<div class="navbar-header">
										<div class="pbmit-mobile-menu-bg" style="display:none"></div>
										<!-- Toggle Button --> 
										<button class="navbar-toggler" type="button">
											<i class="pbmit-base-icon-menu-1"></i>
										</button>
									</div>
									<div class="collapse navbar-collapse clearfix show" id="pbmit-menu">
										<div class="pbmit-menu-wrap">
											<span class="closepanel">
												<svg class="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163" height="20.163" viewBox="0 0 26.163 26.163">
													<rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
													<rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
												</svg>
											</span>
											<ul class="navigation clearfix menu_list">
												<li id="home_link">
													<a href="/">Home</a>
												</li>
												<li id="service_link">
													<a href="service-details.html">Services</a>
												</li>
												</li>
												<li id="projects_link">
													<a href="projects.html">Projects</a>
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

document.getElementById('footer_tag').innerHTML = `
	<div class="footer-wrap pbmit-footer-widget-area">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<aside class="widget pbmit-two-column-menu">
						<ul>
							<li><a href="about-us.html">About Us</a></li>
							<li><a href="contact-us.html">Contact Us</a></li>
							<li><a href="service-details.html">Service</a></li>
							<li><a href="projects.html">Projects</a></li>
						</ul>
					</aside>
				</div>
				<div class="col-md-4">
					<aside class="widget pbmit-two-column-menu">
						<ul id="footer_middle_div">
							<li><a href="mailto:innerluxdesignstudio@gmail.com">innerluxdesignstudio@gmail.com</a></li>
							<li style="display:none"> </li>
							<li><a href="tel:+918888199337">+91 88881 99337</a></li>
							<li>MUMBAI, 401203</li>
						</ul>
					</aside>
				</div>
				<div class="col-md-4">
					<aside class="widget">
						<div class="textwidget">
							<div class="pbmit-footer-logo" style=" font-size: 34px; color: #d0b08f; ">
								InnerLux Design Studio
							</div>
							<a href="https://api.whatsapp.com/send?phone=+918888199337&text=Hello" target="_blank" class="whatsapp-icon" style=" position: fixed; bottom: 17px; right: 3px;z-index: 999 ">
								<img src='../images/avtar/pngegg.png' style="width:70px; height: 70px" />
							</a>
						</div>
					</aside>
				</div>
			</div>
		</div>
	</div>

	<div class="pbmit-footer-text-area">
		<div class="container">
			<div class="pbmit-footer-text-inner">
				<div class="row">
					<div class="col-md-12"> 
						<div class="pbmit-footer-copyright-text-area"> Copyright © <span id="year"></span> <a href="#">InnerLux Design Studio</a> All Rights Reserved.</div>
					</div>
				</div>
			</div>
		</div>
	</div>
`;			

$(window).on("load", function() {
    console.log(window.location.pathname.split("/")[1]);
    if(window.location.pathname.split("/")[1] === "index.html"){
        $("#home_link").addClass("active");
    }else if(window.location.pathname.split("/")[1] === "service-details.html"){
        $("#service_link").addClass("active");
    }else if(window.location.pathname.split("/")[1] === "about-us.html"){
        $("#about_link").addClass("active");
    }else if(window.location.pathname.split("/")[1] === "contact-us.html"){
        $("#contact_us_link").addClass("active");
    }else if(window.location.pathname.split("/")[1] === "projects.html"){
        $("#projects_link").addClass("active");
    }else{
		$("#home_link").addClass("active");	
	}
});

document.getElementById("year").innerHTML = new Date().getFullYear();

$(window).on('scroll', function() {
	if ($('.pbmit-progress-wrap').hasClass('active-progress')) {
        $(".whatsapp-icon").css({"bottom":"100px","right":"7px"});
    }else{
		$(".whatsapp-icon").css({"bottom":"20px","right":"7px"});
	}
 });


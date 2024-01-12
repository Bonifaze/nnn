/* GLOBAL VARS */
var viewportHeight;
var viewportWidth;

var oldIE;

var html;
var body;

var resetMenu
var onlyOneBranch

var mobileIcon;
var menuShowHide;
var contentContainer;
var movableOject;

/* Mobile menu animate fallback */
var moveOpen = {"right": "0px"};
var moveClose = {"right": "-1000px"}

var documentClickFlag = false;
var submenuClickFlag = false;
var preventClickFlag = false;
var mobileMenuOpen = false;

/* GLOBAL FUNCTIONS */
function closeMobileMenu()
{
	$(mobileIcon).removeClass("active");
	$(".closeOverlay").removeClass("moveOver");

	/* Move the object using the most appropriate method */
	if (Modernizr.csstransitions)
	{
		$(movableOject).removeClass("moveOver").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function()
		{
			resetMobileMenu();
		});
	}
	else
	{
		$(movableOject).animate(moveClose, function()
		{
			resetMobileMenu();
		})
	}

	/* enable scrolling on document */
	/* setTimeout for Firefox bug */
	setTimeout(function()
	{
		$(html).removeClass("noScroll");
		$(body).removeClass("noScroll");
	},25)

	setTimeout(function()
	{
		mobileMenuOpen = false;
		$(":input").prop("disabled", false);
//		$(".contentContainer").css("z-index", "10");
//		$("#mobile-menu-container").css("right", "auto"); /* { position: relative; width: auto; right: auto; overflow: auto; }*/
	},1000)

}

/* Reset ALL branches to closed when menu is closed */
function resetMobileMenu()
{
	if (resetMenu)
	{
		var openLI = $("#mobile-menu-container li.open");

		$(openLI).removeClass("open");
		$(openLI).find("a.showHideIcon").text("+").removeClass("active");

		var branch = getBranch(openLI);
		closeBranch(branch);  //close all the child branches
		refreshMenuSize();  //recalc iScroll limits
	}
}		

/* iScroll plugin recalc menu height */
function refreshMenuSize()
{
	if (!oldIE)  //only do this if it's IE9+
	{
		refreshMenu();  //recalc iScroll limits
	}
}

/* Collapse menu functions */
function getBranch(elem)  //LI parent of clicked A is passed
{
	var thisChildLists = $(elem).find("ul");  //get all child UL's in every sub level in this LI branch
	var thisChildLinks = thisChildLists.find("a.showHideIcon");  //get all A's in every sub level that can be expanded
	var thisChildLinksActive = thisChildLists.find("li.activeMenuLink");  //get the current active link

	return {"thisChildLists": thisChildLists, "thisChildLinks": thisChildLinks, "thisChildLinksActive":thisChildLinksActive};
}

function closeBranch(branch)
{
	$(branch.thisChildLists).hide();  //Hide all the UL's at every sub level
	$(branch.thisChildLinks).parent().removeClass("open");  //remove "open" class from all open LI's
	$(branch.thisChildLinks).text("+").removeClass("active");  //reset "-" back to "+" for all expand A's in this branch

	/* - This removes the active class from the menu when collapsing branches
	$(branch.thisChildLinksActive).removeClass("activeMenuLink")
	*/
}

document.addEventListener("click", function(e) {
	if ($(e.target).parents("#mobile-menu-container").length == 0 && mobileMenuOpen)
	{
        e.preventDefault();
        e.stopPropagation();
        return false;
	}
});

$(document).ready(function()
{
	if ($("html").hasClass("lt-ie9"))
	{
		oldIE = true;
	}

	html = $("html");
	body = $("body");

	/* Mobile Menu vars */
	resetMenu = false; 		//true = all open branches will be reset | false = menu will open in same state as it was closed
	onlyOneBranch = true;	//true = allow only one branch open | false = allow multiple branches open

	mobileIcon = $(".mobile-menu-icon");
	menuShowHide = $("#mobile-menu-container a.showHideIcon");
	contentContainer = $(".pageWrapper");
	movableOject = $("#mobile-menu-container");

	viewportWidth = viewportSize.getWidth();  //get the true viewport height

	/*-----------------*/
	/* Side slide menu */
	/*-----------------*/			
	$(".closeMenuLink, .closeOverlay").on("click tap", function(e)
	{
		e.preventDefault();
		closeMobileMenu();
		return false;
	})

	$(mobileIcon).click(function(e)
	{
		e.preventDefault();

		if (!$(this).hasClass("active") && !mobileMenuOpen)
		{
//			$(".leftMenuContainer").show();
//			$(".contentContainer").css("z-index", "1001");

			$(":input").prop("disabled", true);

			$(this).addClass("active");

			/* Move the content over using the most appropriate method */
			if (Modernizr.csstransitions)
			{
				$(movableOject).addClass("moveOver");
			}
			else
			{
				$(movableOject).animate(moveOpen, 100);
			}

			// If not on the home page then scroll the menu accordingly.
			if ($("#mobile-menu-container .breadcrumbItem").length > 0 && $("#mobile-menu-container").hasClass("initial"))
			{
				// If the current page does not have a sub-menu then scroll the menu so that the current page is vertically centred.
				if ($("#mobile-menu-container span").length > 0)
				{
					myScroll.scrollToElement(document.querySelector("#mobile-menu-container span"), 500, true, true);
//							myScroll.scrollToElement(document.querySelector("#mobile-menu-container span"), 1000, true, true, IScroll.utils.ease.elastic);
				}
				// If the current page has a sub-menu <ul> then scroll the menu so that the current page is at the top.
				else
				{
					myScroll.scrollToElement(document.querySelector("#mobile-menu-container .sectionHeader"), 500);
//							myScroll.scrollToElement(document.querySelector("#mobile-menu-container .sectionHeader"), 1000, 0, 0, IScroll.utils.ease.elastic);
				}
			}

			/* Prevent scrolling */
			/* setTimeout to fix FF bug where change in overflow of parent prevents child transition animation */
			setTimeout(function()
			{
				$(html).addClass("noScroll");
				$(body).addClass("noScroll");
				$(".closeOverlay").addClass("moveOver");
				$(".closeOverlay").css({"width": viewportWidth - 270})
//				$(".closeOverlay").css({"width": viewportWidth})
			},25)

			mobileMenuOpen = true;
		}
		else
		{
			closeMobileMenu();
		}

		return false;
	})
	/*---------------------*/
	/* END Side slide menu */
	/*---------------------*/

	/*----------------------------*/
	/* Show / Hide Mobile Sub Nav */
	/*----------------------------*/
/*
//	$(menuShowHide).click(function(e)
	$(menuShowHide).on("click", function(e)
	{
		// Insert a small delay before actioning the next click event to account for the default Android browser interpreting a single click as two clicks.
		if (!submenuClickFlag) {
			submenuClickFlag = true;
			setTimeout(function(){
				submenuClickFlag = false;
			}, 400);

			$("#mobile-menu-container").removeClass("initial");

			e.preventDefault();
			e.stopImmediatePropagation();
//			e.stopPropagation();
			var animSpeed = 400;

			// EXPAND MENU
			if (!$(this).parent().hasClass("open"))
			{
				// If only one branch is allowed
				if (onlyOneBranch)
				{
					var siblingLI = $(this).parent().siblings("li.open"); //get the immediate sibling branch that is open

					$(siblingLI).find("ul:eq(0)").slideUp(animSpeed).promise().done(function() //find the first child UL within the sibling and collapse it
					{
						$(siblingLI).removeClass("open");
						$(siblingLI).find("a.showHideIcon").text("+").removeClass("active");

						// Deep reset - Search ALL nested sub levels and reset them to closed
						var branch = getBranch(siblingLI);
						closeBranch(branch);  //close all the child branches
						refreshMenuSize();  //recalc iScroll limits
					})
				}

				// Expand the branch we just selected
				$(this).text("-").addClass("active");
				$(this).parent().addClass("open").find("ul:eq(0)").slideDown(animSpeed, function()
				{
					refreshMenuSize();
				});
			}

			// COLLAPSE MENU
			else
			{
				$(this).text("+").removeClass("active"); 
				$(this).parent().removeClass("open").find("ul:eq(0)").slideUp(animSpeed).promise().done(function() //find the first child UL within the sibling and collapse it
				{
					// Deep reset - Search ALL nested sub levels and reset them to closed
					var branch = getBranch($(this).parent());
					closeBranch(branch);
					refreshMenuSize();
				}); 
			}
		}

		return false
	});
*/
	/*--------------------------------*/
	/* END Show / Hide Mobile Sub Nav */
	/*--------------------------------*/
});

$(window).load(function ()
{
	$(window).on("orientationchange", function()
	{
		closeMobileMenu()
	})

	$(window).on("resize", function()
	{
		viewportWidth = viewportSize.getWidth();  //get the true viewport height
		$(".closeOverlay").css({"width": viewportWidth - 270})
	})

	if ($("#mobile-menu-container .thisPage").length == 1)
	{
//		$("#mobile-menu-container .thisPage > a.showHideIcon").click();
//		$("#mobile-menu-container .thisPage").parents("li").children("a.showHideIcon").click();

		$("#mobile-menu-container .thisPage").parents("li").andSelf().each(function() {
			$(this).children("a.showHideIcon").text("-").addClass("active");
			$(this).addClass("open").find("ul:eq(0)").show();
		});

		refreshMenuSize();
	}

	$("#mobile-menu-container").addClass("initial");
});
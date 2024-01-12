var ua = navigator.userAgent;
var firefox41Plus = false;
var kisWidgetScreenResizerTimer;

if (ua.indexOf("Firefox") > 0) {
	var firefoxVersion = parseFloat(ua.slice(ua.indexOf("Firefox") + 8));

	if (firefoxVersion >= 41) {
		firefox41Plus = true;
	}
}

$(document).ready(function() {
	"use strict";

	if ($("#course-profile .video").length > 0) {
		$.getScript("https://content.jwplatform.com/libraries/GAxgn6Z5.js", function() {
			var youtubeImage = new Image();

			youtubeImage.onload = function () {
				// The user can access YouTube
				initialiseCourseVideos(true);
			};

			youtubeImage.onerror = function () {
				// The user can't access YouTube
				initialiseCourseVideos(false);
			};

			var d = new Date();
			youtubeImage.src = "https://youtube.com/favicon.ico?ms=" + d.getTime();
		});
	}

	$("table.chart").each(function() {
	    var chart;
		var chartDisplayType = $(this).attr("data-displaytype");
		var chartUnits = $(this).attr("data-units");
		var chartTableId = $(this).attr("id");
		var chartDivId = chartTableId.replace("table", "div");

		if (chartDisplayType === "pie") {
			chart = new Highcharts.Chart({
				colors: ["#6B2C91", "#F27820", "#DD322D", "#009448", "#396FB5", "#D23894", "#4D4D4D", "#B2912F"],
				chart: {
					renderTo: chartDivId,
					marginTop: 10,
					spacing: [0, 0, 0, 0],
					backgroundColor: "#F2F2F2",
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false,
					style: {
						fontFamily: '"Open Sans", Sans-Serif'
					}
				},
				title: {
					text: null
				},
				legend: {
					layout: "vertical",
					borderWidth: 0,
					itemMarginBottom: 5,
					maxHeight: 180,
					labelFormatter: function() {
						return wordwrap(this.name, 28, "<br />");
					},
					itemStyle: {
						color: '#333',
						fontSize: '15px',
						fontWeight: 400
					}
				},
				credits: {
					enabled: false
				},
				tooltip: {
					formatter: function() {
						return wordwrap(this.key, 28, "<br />") + '<br />' + this.y + chartUnits;
					},
					style: {
						color: '#333',
						fontSize: '14px'
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: false,
							color: "#000",
							connectorColor: "#000",
							style: {
								fontSize: "16px"
							}
						},
						point: {
							events: {
								legendItemClick: function () {
									this.select();
									chart.tooltip.refresh(this);
									return false;
								}
							}
						},
						showInLegend: true
					}
				},
				series: [{
					type: 'pie',
					data: getChartData(chartTableId)
				}]
			});
		}
	});

	$("a.show-all-units").on("click", function(event) {
		$(this).closest("tfoot").hide().closest("table").find("tbody tr.hide-default").show().find("a").each(function() {
			var currentHref = $(this).attr("href");
			var newHref = currentHref.replace("&unitYear", "&expandUnitYear=yes&unitYear");
			$(this).attr("href", newHref);
		});

		event.preventDefault();
	});

	$(".how-to-apply a").each(function() {
		var el = jQuery(this);
		var href = (typeof(el.attr("href")) != "undefined") ? el.attr("href") : "";

		if (href.match(/www.ucas.com/i)) {
			$(this).addClass("UCASLink");
		}
	});
});

$(window).on("load", function() {
	"use strict";

	if ($(".kis-widget").length == 1) {
		kisWidgetWidth();

		$(window).on("resize", function() {
			clearTimeout(kisWidgetScreenResizerTimer);

			kisWidgetScreenResizerTimer = setTimeout(function() {
				kisWidgetWidth();
			}, 500);
		});
	}
});

function kisWidgetWidth() {
	"use strict";

	var kisWidget = $(".kis-widget");
	var kisWidgetWidth = kisWidget.width();

	if (kisWidgetWidth >= 450) {
		kisWidget.removeClass("vertical").addClass("horizontal");
	} else {
		kisWidget.removeClass("horizontal").addClass("vertical");
	}
}

function getChartData(elementId) {
	"use strict";

	var chartData = [];
	$("#" + elementId + " tbody tr").each(function() {
		chartData.push([$("th", this).text(), parseInt($("td", this).text())]);
	});

	return chartData;
}

function initialiseCourseVideos(youtubeAccess) {
	"use strict";

	$(".video.playlist").each(function() {
		var $this = $(this);
		$this.find(".loading").show();
		var playlistId = $this.attr("id");
		var playlistContainsUniversityVideo = false;
		var primaryVideoType = "html5";
		var playlistArray = window[playlistId];
		var playlistLength = playlistArray.length;
		var filteredPlaylistArray = [];

		for (var i = 0; i < playlistLength; i++) {
			if (youtubeAccess === true && playlistArray[i].youtubeId !== "") {
				playlistArray[i].file = "https://www.youtube.com/watch?v=" + playlistArray[i].youtubeId;
				filteredPlaylistArray.push(playlistArray[i]);
			} else if (playlistArray[i].vpUrl !== "") {
				playlistArray[i].file = playlistArray[i].vpUrl;
				filteredPlaylistArray.push(playlistArray[i]);
				playlistContainsUniversityVideo = true;
			}
		}

		var filteredPlaylistLength = filteredPlaylistArray.length;

		if (filteredPlaylistLength > 0) {
			$this.parent(".video-container").parent(".media-container").addClass("has-video");

			if (filteredPlaylistLength == 1 && filteredPlaylistArray[0].file.indexOf("youtube") !== -1) {
				$this.replaceWith("<iframe src=\"https://www.youtube-nocookie.com/embed/" + filteredPlaylistArray[0].youtubeId + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" title=\"Video: " + filteredPlaylistArray[0].title.replace(/"/g, "&quot;") + "\" allowfullscreen></iframe>");
			} else {
				if (firefox41Plus && playlistContainsUniversityVideo) {
					primaryVideoType = "flash";
				}

				var jwPlayerInstance = jwplayer(this).setup({
					playlist: filteredPlaylistArray,
					width: "100%",
					aspectratio: "16:9",
					preload: "metadata",
					sharing: {
						heading: "Share video"
					}
				});

				/* Accessibility fixes for JW Player elements with repeated IDs */
				jwPlayerInstance.on("ready", function() {
					var $container = $("#" + playlistId);

					var $shortcutTooltipsExplanationId = $container.attr("aria-describedby");
					$container.attr("aria-describedby", $shortcutTooltipsExplanationId + "-" + playlistId);
					$container.find("#jw-shortcuts-tooltip-explanation").attr("id", $shortcutTooltipsExplanationId + "-" + playlistId);

					var $submenuButtonSettings = $container.find(".jw-settings-submenu-button.jw-icon-settings");
					var $submenuButtonSettingsAriaControls = $submenuButtonSettings.attr("aria-controls");
					$submenuButtonSettings.attr("aria-controls", $submenuButtonSettingsAriaControls + "-" + playlistId);
					$container.find("#" + $submenuButtonSettingsAriaControls).attr("id", $submenuButtonSettingsAriaControls + "-" + playlistId);

					var $submenuButtonCaptions = $container.find(".jw-settings-submenu-button.jw-icon-cc");
					var $submenuButtonCaptionsAriaControls = $submenuButtonCaptions.attr("aria-controls");
					$submenuButtonCaptions.attr("aria-controls", $submenuButtonCaptionsAriaControls + "-" + playlistId);
					$container.find(".jw-submenu-captions").attr("aria-controls", $submenuButtonCaptionsAriaControls + "-" + playlistId);
					$container.find("#" + $submenuButtonCaptionsAriaControls).attr("id", $submenuButtonCaptionsAriaControls + "-" + playlistId);

					$container.find("#jw-settings-submenu-captionsSettings").attr("id", "jw-settings-submenu-captionsSettings-" + playlistId);

					$container.find("button[aria-controls='jw-settings-submenu-color']").attr("aria-controls", "jw-settings-submenu-color-" + playlistId);
					$container.find("#jw-settings-submenu-color").attr("id", "jw-settings-submenu-color-" + playlistId);

					$container.find("button[aria-controls='jw-settings-submenu-fontOpacity']").attr("aria-controls", "jw-settings-submenu-fontOpacity-" + playlistId);
					$container.find("#jw-settings-submenu-fontOpacity").attr("id", "jw-settings-submenu-fontOpacity-" + playlistId);

					$container.find("button[aria-controls='jw-settings-submenu-userFontScale']").attr("aria-controls", "jw-settings-submenu-userFontScale-" + playlistId);
					$container.find("#jw-settings-submenu-userFontScale").attr("id", "jw-settings-submenu-userFontScale-" + playlistId);

					$container.find("button[aria-controls='jw-settings-submenu-fontFamily']").attr("aria-controls", "jw-settings-submenu-fontFamily-" + playlistId);
					$container.find("#jw-settings-submenu-fontFamily").attr("id", "jw-settings-submenu-fontFamily-" + playlistId);

					$container.find("button[aria-controls='jw-settings-submenu-edgeStyle']").attr("aria-controls", "jw-settings-submenu-edgeStyle-" + playlistId);
					$container.find("#jw-settings-submenu-edgeStyle").attr("id", "jw-settings-submenu-edgeStyle-" + playlistId);

					$container.find("button[aria-controls='jw-settings-submenu-backgroundColor']").attr("aria-controls", "jw-settings-submenu-backgroundColor-" + playlistId);
					$container.find("#jw-settings-submenu-backgroundColor").attr("id", "jw-settings-submenu-backgroundColor-" + playlistId);

					$container.find("button[aria-controls='jw-settings-submenu-backgroundOpacity']").attr("aria-controls", "jw-settings-submenu-backgroundOpacity-" + playlistId);
					$container.find("#jw-settings-submenu-backgroundOpacity").attr("id", "jw-settings-submenu-backgroundOpacity-" + playlistId);

					$container.find("button[aria-controls='jw-settings-submenu-windowColor']").attr("aria-controls", "jw-settings-submenu-windowColor-" + playlistId);
					$container.find("#jw-settings-submenu-windowColor").attr("id", "jw-settings-submenu-windowColor-" + playlistId);

					$container.find("button[aria-controls='jw-settings-submenu-windowOpacity']").attr("aria-controls", "jw-settings-submenu-windowOpacity-" + playlistId);
					$container.find("#jw-settings-submenu-windowOpacity").attr("id", "jw-settings-submenu-windowOpacity-" + playlistId);
				});

				jwPlayerInstance.on("playlistItem", function(playlistItem) {
					var playlistItemMediaContainer = $("#" + playlistId + "MediaContainer");
					playlistItemMediaContainer.find(".video-description").text(playlistItem.item.title);

					if (playlistItem.item.file.indexOf("youtube") === -1) {
						playlistItemMediaContainer.find(".jwplayer").removeClass("youtube");
					} else {
						playlistItemMediaContainer.find(".jwplayer").addClass("youtube");
					}
				});
			}
		} else {
			// After removing any YouTube videos for users who can't access YouTube, if there are no videos left in the playlist, we need to remove the video player container.

			if ($this.parent(".video-container").parent(".video-container-outer").length) {
				$this.parent(".video-container").parent(".video-container-outer").remove();
			} else {
				$this.parent(".video-container").remove();
			}
		}
	});
}

function wordwrap(str, intWidth, strBreak, cut) {
	"use strict";
	//  http://locutus.io/php/wordwrap/

	var m = ((arguments.length >= 2) ? arguments[1] : 75);
	var b = ((arguments.length >= 3) ? arguments[2] : '\n');
	var c = ((arguments.length >= 4) ? arguments[3] : false);

	var i, j, l, s, r;

	str += '';

	if (m < 1) {
		return str;
	}

	for (i = -1, l = (r = str.split(/\r\n|\n|\r/)).length; ++i < l; r[i] += s) {
		// @todo: Split this up over many more lines and more semantic variable names
		// so it becomes readable
		for (s = r[i], r[i] = '';
		s.length > m;
		r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : '')) {
			j = c === 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length || c === true && m || j.input.length + (j = s.slice(m).match(/^\S*/))[0].length;
		}
	}

	return r.join('\n');
}
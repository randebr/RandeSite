	
$(document).ready(function() {
	$( window ).scroll(function() {
			var height = $(window).scrollTop();
			if(height >= 100) {
				$('header').addClass('fixed-menu');
			} else {
				$('header').removeClass('fixed-menu');
			}
		});
	});
 $(document).ready(function(){

	

	$('.blog-slider').owlCarousel({
		loop: true,
		margin:30,
		autoplay:true,
		nav:false,
		dots:true,
		dotsData: true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			667: {
			  items:2
			},
			1024: {
				items:3
			},
			1200: {
				items:4
			}
		}
	 })



	 $('.logoisler ').owlCarousel({
		loop: true,
		margin:30,
		autoplay:true,
		nav:false,
		dots:true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			667: {
			  items:1
			},
			768: {
				items:2
			 },
			1000: {
				items:2
			},
			1024: {
				items:3
			},
			1200: {
				items:6
			}
		}
	 })


	 $('.slider-testi-20').owlCarousel({
		loop: true,
		margin:30,
		autoplay:true,
		nav:false,
		dots:true,
		responsive: {
		  0: {
			items:1
		  },
		  375: {
			items:1
		  },
		  600: {
			  items:1
		  },
		  667: {
			items:2
		  },
		  1000: {
			  items:2
		  },
		  1024: {
			items:3
		  },
		  1200: {
			items:3
		  }
	  
		}
	  })


	  $('.slider-testi-new').owlCarousel({
		loop: true,
		margin:30,
		autoplay:true,
		nav:false,
		dots:true,
		responsive: {
		  0: {
			items:1
		  },
		  375: {
			items:1
		  },
		  600: {
			  items:1
		  },
		  667: {
			items:1
		  },
		  1000: {
			  items:1
		  },
		  1024: {
			items:1
		  },
		  1200: {
			items:1
		  }
	  
		}
	  })
	  
	 $('.faviarite-lider2').owlCarousel({
		loop: false,
		margin:30,
		autoplay:false,
		nav:false,
		dots:true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			667: {
			  items:1
			},
			1000: {
				items:4
			}
		}
	 })


	 

		$('.print-slider').owlCarousel({
	   loop: true,
	   margin:15,
	   autoplay:true,
	   nav:false,
	   dots:true,
	   responsive: {
		   0: {
			   items:1
		   },
		   600: {
			   items:1
		   },
		   667: {
			 items:2
		   },
		   1000: {
			   items:5
		   }
	   }
	})


	$('.print-slider2').owlCarousel({
		loop: false,
		margin:15,
		autoplay:false,
		nav:false,
		dots:true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			667: {
			  items:2
			},
			1000: {
				items:5
			}
		}
	 })
	
	$('.comon-proslide').owlCarousel({
		loop: true,
		margin:30,
		autoplay:true,
		nav:false,
		dots:true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			667: {
			  items:2
			},
			1000: {
				items:2
			},
			1024: {
				items:3
			},
			1200: {
				items:4
			}
		}
	 })


	 $('.saying-slider').owlCarousel({
		loop: true,
		margin:30,
		autoplay:true,
		nav:false,
		dots:true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			667: {
			  items:2
			},
			1000: {
				items:3
			}
		}
	 })
	
	 
	
$('.deals-slider').owlCarousel({
	loop: true,
	margin:15,
	autoplay:true,
	nav:false,
	dots:false,
	slideTransition: 'linear',
	autoplayTimeout: 6000,
	autoplaySpeed: 6000,
	responsive: {
	  0: {
		items:1
	  },
	  375: {
		items:1
	  },
	  600: {
		  items:1
	  },
	  667: {
		items:2
	  },
	  1000: {
		  items:2
	  },
	  1024: {
		items:3
	  },
	  1200: {
		items:4
	  }
  
	}
  })


  $('.deals-slider2').owlCarousel({
	loop: true,
	rtl:true,
	margin:15,
	autoplay:true,
	nav:false,
	dots:false,
	slideTransition: 'linear',
	autoplayTimeout: 6000,
	autoplaySpeed: 6000,
	responsive: {
	  0: {
		items:1
	  },
	  375: {
		items:1
	  },
	  600: {
		  items:1
	  },
	  667: {
		items:2
	  },
	  1000: {
		  items:2
	  },
	  1024: {
		items:3
	  },
	  1200: {
		items:4
	  }
  
	}
  })




		$('.slider-div').owlCarousel({
		loop: true,
		margin:30,
		autoplay:true,
		nav:false,
		dots:true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			667: {
			items:1
			},
			768: {
				items:1
			},
			1000: {
				items:1
			}
		}
	})

	jQuery('.deals-slider').trigger('play.owl.autoplay',[2000]);

    function setSpeed(){
        jQuery('.deals-slider').trigger('play.owl.autoplay',[6000]);
    }

    setTimeout(setSpeed, 1000);
  
});








$(document).ready(function(){
	$('.services-slider').owlCarousel({
	loop: true,
	margin:50,
	autoplay:true,
	nav:false,
	dots:true,
	responsive: {
		0: {
			items:1
		},
		600: {
			items:1
		},
		667: {
		items:1
		},
		768: {
			items:2
			},
		1000: {
			items:3
		}
	}
})

});



$(document).ready(function(){
	$('.like-slide').owlCarousel({
	loop: true,
	margin:30,
	autoplay:true,
	nav:false,
	dots:true,
	responsive: {
		0: {
			items:1
		},
		600: {
			items:1
		},
		667: {
		items:2
		},
		1000: {
			items:4
		}
	}
})

	$('.top-menu-slider').owlCarousel({
		loop: true,
		margin:30,
		autoplay:false,
		nav:false,
		dots:true,
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			667: {
			items:2
			},
			1000: {
				items:7
			}
		}
	
	
})





});


// products slide

$(document).ready(function () {
	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
	var slidesPerPage = 4; //globaly define number of elements per page
	var syncedSecondary = true;
  
	sync1
	  .owlCarousel({
		items: 1,
		slideSpeed: 2000,
		nav: false,
		autoplay: false,
		dots: false,
		loop: true,
		responsiveRefreshRate: 200,
		
	  })
	  .on("changed.owl.carousel", syncPosition);
  
	sync2
	  .on("initialized.owl.carousel", function () {
		sync2.find(".owl-item").eq(0).addClass("current");
	  })
	  .owlCarousel({
		items: slidesPerPage,
		dots: true,
		nav: false,
		smartSpeed: 200,
		slideSpeed: 500,
		slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		responsiveRefreshRate: 100
	  })
	  .on("changed.owl.carousel", syncPosition2);
  
	function syncPosition(el) {
	  //if you set loop to false, you have to restore this next line
	  //var current = el.item.index;
  
	  //if you disable loop you have to comment this block
	  var count = el.item.count - 1;
	  var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
  
	  if (current < 0) {
		current = count;
	  }
	  if (current > count) {
		current = 0;
	  }
  
	  //end block
  
	  sync2
		.find(".owl-item")
		.removeClass("current")
		.eq(current)
		.addClass("current");
	  var onscreen = sync2.find(".owl-item.active").length - 1;
	  var start = sync2.find(".owl-item.active").first().index();
	  var end = sync2.find(".owl-item.active").last().index();
  
	  if (current > end) {
		sync2.data("owl.carousel").to(current, 100, true);
	  }
	  if (current < start) {
		sync2.data("owl.carousel").to(current - onscreen, 100, true);
	  }
	}
  
	function syncPosition2(el) {
	  if (syncedSecondary) {
		var number = el.item.index;
		sync1.data("owl.carousel").to(number, 100, true);
	  }
	}
  
	sync2.on("click", ".owl-item", function (e) {
	  e.preventDefault();
	  var number = $(this).index();
	  sync1.data("owl.carousel").to(number, 300, true);
	});
  });



  
// quantity js

// quantity
(function () {
    "use strict";
    var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
      return function (arg) {
        if (this.length > 1) {
          this.each(function () {
            var $this = $(this);
  
            if (!$this.data(ident)) {
              $this.data(ident, func($this, arg));
            }
          });
  
          return this;
        } else if (this.length == 1) {
          if (!this.data(ident)) {
            this.data(ident, func(this, arg));
          }
  
          return this.data(ident);
        }
      };
    });
  })();
  



  var divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}





$(document).ready(function () {
	$('.navbar .dmenu').hover(function () {
			$(this).find('.sm-menu').first().stop(true, true).slideDown(150);
		}, function () {
			$(this).find('.sm-menu').first().stop(true, true).slideUp(105)
		});
	}); 
	 
		$(document).ready(function() {
		$(".megamenu").on("click", function(e) {
			e.stopPropagation();
		});
	});



// dropdown

$(document).ready(function(){

	$(".custom-select").each(function() {
	  var classes = $(this).attr("class"),
		id      = $(this).attr("id"),
		name    = $(this).attr("name");
	  var template =  '<div class="' + classes + '">';
		template += '<span class="custom-select-trigger">' + $(this).attr("name") + '</span>';
		template += '<div class="custom-options">';
		$(this).find("option").each(function() {
		  template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
		});
	  template += '</div></div>';
	  
	  $(this).wrap('<div class="custom-select-wrapper"></div>');
	  $(this).hide();
	  $(this).after(template);
	  });
	  $(".custom-option:first-of-type").hover(function() {
	  $(this).parents(".custom-options").addClass("option-hover");
	  }, function() {
	  $(this).parents(".custom-options").removeClass("option-hover");
	  });
	  $(".custom-select-trigger").on("click", function() {
	  $('html').one('click',function() {
		$(".custom-select").removeClass("opened");
	  });
	  $(this).parents(".custom-select").toggleClass("opened");
	  event.stopPropagation();
	  });
	  $(".custom-option").on("click", function() {
	  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
	  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
	  $(this).addClass("selection");
	  $(this).parents(".custom-select").removeClass("opened");
	  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
	  });
	
});




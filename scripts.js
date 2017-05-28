$(function() {
	// No scroll
	$('html, body').css({
	    overflow: 'hidden',
	    height: '100%'
	});

	// https://github.com/aterrien/jQuery-Knob
	$(function() {
            $(".dial").knob({
                'change': function(value) {
                	if (this.$.attr('id') === 'volume-knob') {
                		allSoundsGroup.volume = Math.floor(value) / 100;
                	} else if (this.$.attr('id') === 'reverb-knob') {
                		reverb_effect.mix = Math.floor(value) / 100;
                	} else if (this.$.attr('id') === 'delay-knob') {
                		delay_effect.feedback = Math.floor(value) / 100;
                		if (delay_effect.feedback === 0) {
                			delay_effect.mix = 0;
                		} else {
                			delay_effect.mix = 0.5;
                		}
                	} else if (this.$.attr('id') === 'modulator-knob') {
                		modulator_effect.mix = Math.floor(value) / 100;
                	}
                }
            });
        });

	// Flags
	var devMode = true;
	var advMode = true;

	$('#pineappleton').on("click", function() { 
		devMode = !devMode;
		$(".sound-label").each(function() {
			if(devMode) {
				$(this).show();
			} else {
				$(this).hide();
			}
		})
	})

	$('#advancedToggle').on("click", function() { 
		advMode = !advMode;

		// Stop all sounds
		$(".bg-green").each(function() {
			$(this).removeClass('lighten-bg-2');
	    	allSoundsGroup.stop();
		}) 

		// Reset effects
		$('#volume-knob').val(100);
		$('#volume-knob').trigger('change');
		allSoundsGroup.volume = 100;
		$('#reverb-knob').val(0);
		$('#reverb-knob').trigger('change');
		reverb_effect.mix = 0;
		$('#delay-knob').val(0);
		$('#delay-knob').trigger('change');
		delay_effect.feedback = 0;
		delay_effect.mix = 0;
		$('#modulator-knob').val(0);
		$('#modulator-knob').trigger('change');
		modulator_effect.mix = 0;

		if (advMode) {
			$(this).text(' | Go To Beginner Mode');
				$(".advanced-sounds").each(function() {
					$(this).show();
				}) 
				$(".advanced-knob").each(function() {
					$(this).show();
				})
				if ($(window).width() >= 1024) {
					$(".basic-sounds").each(function() {
						$(this).height('30vh');
					})
					$(".basic-label").each(function() {
						$(this).css('padding-top', '14vh');
					})
				} else {
					$(".basic-sounds").each(function() {
						$(this).height('26vh');
					})
					$(".basic-label").each(function() {
						$(this).css('padding-top', '12vh');
					})
				}
				$(".basic-knob").each(function() {
					$(this).removeClass('xs-4').addClass('xs-3');
				})
		} else {
			$(this).text(' | Go To Advanced Mode');
			$(".advanced-sounds").each(function() {
				$(this).hide();
			}) 
			$(".advanced-knob").each(function() {
				$(this).hide();
			})
			$(".basic-sounds").each(function() {
				$(this).height('60vh');
			})
			$(".basic-label").each(function() {
				$(this).css('padding-top', '26vh');
			})
			$(".basic-knob").each(function() {
				$(this).removeClass('xs-3').addClass('xs-4');
			})
		}
	})

	// Effect Tiles
	$(".bg-green").on("click", function() {
		var sound = $(this).attr("data-sound");

		if ($(this).hasClass('lighten-bg-2')) {
		    $(this).toggleClass('lighten-bg-2');
		    eval(sound).stop();

		} else {
		    $(this).addClass('lighten-bg-2');
			eval(sound).play();
		}
	})

	// https://alemangui.github.io/pizzicato/
	// Effects
	var delay_effect = new Pizzicato.Effects.Delay({
	    feedback: 0.0,
	    time: 0.22,
	    mix: 0.0
	});
    var reverb_effect = new Pizzicato.Effects.Reverb({
	    time: 5,
	    decay: 5,
	    reverse: false,
	    mix: 0.0
	});
	var modulator_effect = new Pizzicato.Effects.RingModulator({
	    speed: 30,
	    distortion: 0.8,
	    mix: 0.0
	});

	// Sounds 
	var aggrobass = new Pizzicato.Sound({
		source: 'file',
		options: {
			path: './sounds/aggrobass.mp3',
			loop: true
		}}, function() {
	    aggrobass.addEffect(delay_effect);
		aggrobass.addEffect(reverb_effect);
	    aggrobass.addEffect(modulator_effect);
    });

	var airyvox = new Pizzicato.Sound({
		source: 'file',
		options: {
			path: './sounds/airyvox.mp3',
			loop: true
		}}, function() {
	    airyvox.addEffect(delay_effect);
		airyvox.addEffect(reverb_effect);
	    airyvox.addEffect(modulator_effect);
    });

	var bringit = new Pizzicato.Sound({
		source: 'file',
		options: {
			path: './sounds/bringit.mp3',
			loop: true
		}}, function() {
	    bringit.addEffect(delay_effect);
		bringit.addEffect(reverb_effect);
	    bringit.addEffect(modulator_effect);
    });

    var cubansax = new Pizzicato.Sound({
		source: 'file',
		options: {
			path: './sounds/cubansax.mp3',
			loop: true
		}}, function() {
	    cubansax.addEffect(delay_effect);
		cubansax.addEffect(reverb_effect);
	    cubansax.addEffect(modulator_effect);
    });

    var dropthefunk = new Pizzicato.Sound({
		source: 'file',
		options: {
			path: './sounds/dropthefunk.mp3',
			loop: true
		}}, function() {
	    dropthefunk.addEffect(delay_effect);
		dropthefunk.addEffect(reverb_effect);
	    dropthefunk.addEffect(modulator_effect);
    });

	var gospel = new Pizzicato.Sound({
		source: 'file',
		options: {
			path: './sounds/gospel.mp3',
			loop: true
		}}, function() {
	    gospel.addEffect(delay_effect);
		gospel.addEffect(reverb_effect);
	    gospel.addEffect(modulator_effect);
    });

	var harmonica = new Pizzicato.Sound({
		source: 'file',
		options: {
			path: './sounds/harmonica.mp3',
			loop: true
		}}, function() {
	    harmonica.addEffect(delay_effect);
		harmonica.addEffect(reverb_effect);
	    harmonica.addEffect(modulator_effect);
    });

    var longuevibes = new Pizzicato.Sound({
		source: 'file',
		options: {
			path: './sounds/longuevibes.mp3',
			loop: true
		}}, function() {
	    longuevibes.addEffect(delay_effect);
		longuevibes.addEffect(reverb_effect);
	    longuevibes.addEffect(modulator_effect);
    });

    var allSoundsGroup = new Pizzicato.Group([aggrobass, airyvox, bringit, cubansax, dropthefunk, gospel, harmonica, longuevibes]);
});
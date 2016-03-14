document.addEventListener("DOMContentLoaded", function(){
	var enabled;

	var button = document.getElementById("toggleKeyboard");
	var indicator = document.getElementById("indicator");

	var lowE = new buzz.sound("/audio/voice_e_low_1.wav");
	var F = new buzz.sound("/audio/voice_f_1.wav");
	var G = new buzz.sound("/audio/voice_g_1.wav");
	var A = new buzz.sound("/audio/voice_a_1.wav");
	var B = new buzz.sound("/audio/voice_b_1.wav");
	var C = new buzz.sound("/audio/voice_c_1.wav");
	var D = new buzz.sound("/audio/voice_d_1.wav");
	var highE = new buzz.sound("/audio/voice_e_high_1.wav");

	button.addEventListener("click", function(){
		if(enabled){
			enabled = false;
			indicator.innerHTML = "Off";
		}else{
			enabled = true;
			indicator.innerHTML = "On";
		}
	});

	document.addEventListener("keydown", function(event) {
		if(enabled){
			//Low E
			if(event.keyCode == 81){
				lowE.stop();
				lowE.play();
			}

			//F
			if(event.keyCode == 87){
				F.stop();
				F.play();
			}

			//G
			if(event.keyCode == 69){
				G.stop();
				G.play();
			}

			//A
			if(event.keyCode == 82){
				A.stop();
				A.play();
			}

			//B
			if(event.keyCode == 84){
				B.stop();
				B.play();
			}

			//C
			if(event.keyCode == 89){
				C.stop();
				C.play();
			}

			//D
			if(event.keyCode == 85){
				D.stop();
				D.play();
			}

			//High E
			if(event.keyCode == 73){
				highE.stop();
				highE.play();
			}
		}
	})
}, false);

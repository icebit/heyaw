document.addEventListener("DOMContentLoaded", function(){
	var enabled;

	var host = "howmanyheyaws.tk";

	var button = document.getElementById("toggleKeyboard");
	var indicator = document.getElementById("indicator");

	var C = new buzz.sound("/scale/C.wav");
	var Cs = new buzz.sound("/scale/Cs.wav");
	var D = new buzz.sound("/scale/D.wav");
	var Ds = new buzz.sound("/scale/Ds.wav");
	var E = new buzz.sound("/scale/E.wav");
	var F = new buzz.sound("/scale/F.wav");
	var Fs = new buzz.sound("/scale/Fs.wav");
	var G = new buzz.sound("/scale/G.wav");
	var Gs = new buzz.sound("/scale/Gs.wav");
	var hA = new buzz.sound("/scale/hA.wav");
	var hAs = new buzz.sound("/scale/hAs.wav");
	var hB = new buzz.sound("/scale/hB.wav");
	var hC = new buzz.sound("/scale/hC.wav");

	var num_heyaws = 0;

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
			if(event.keyCode == 65){
				C.stop();
				C.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 87){
				Cs.stop();
				Cs.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 83){
				D.stop();
				D.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 69){
				Ds.stop();
				Ds.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 68){
				E.stop();
				E.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 70){
				F.stop();
				F.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 84){
				Fs.stop();
				Fs.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 71){
				G.stop();
				G.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 89){
				Gs.stop();
				Gs.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 72){
				hA.stop();
				hA.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 85){
				hAs.stop();
				hAs.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 74){
				hB.stop();
				hB.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}

			if(event.keyCode == 75){
				hC.stop();
				hC.play();
				num_heyaws ++;
				send_heyaw(event.keyCode);
			}
		}

		setInterval(incrementHeyaw, 300);

		function incrementHeyaw() {
			if(num_heyaws > 0) {
				$.get("http://" + host + ":4433/add?num=" + num_heyaws, function(data){});
				num_heyaws = 0;
			}
		}

		function send_heyaw(code) {
			$.get("http://" + host + ":4433/play?code=" + code, function(data){});
		}
	})
}, false);

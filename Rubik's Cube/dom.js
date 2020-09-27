$("#scramble").click(() => rubix.scramble());
$("#solve").click(() => rubix.fullSolve());

$("#cube-target").mouseover(() => rotate = true);
$("#cube-target").mouseout(() => rotate = false);
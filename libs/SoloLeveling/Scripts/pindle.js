/*
*	@filename	pindle.js
*	@author		isid0re
*	@desc		pindle runs for MF and gold
*/

function pindle () {
	Town.townTasks();
	print('ÿc9SoloLevelingÿc0: starting pindle');
	me.overhead("Pindle");

	if (!Pather.getPortal(121)) {
		Town.npcInteract("anya");
	}

	if (!Pather.usePortal(121)) {
		return true;
	}

	Precast.doPrecast(true);
	Pather.moveTo(10058, 13234);
	Attack.killTarget(getLocaleString(22497)); // pindleskin
	Pickit.pickItems();

	return true;
}

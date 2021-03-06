"use strict";

let tableDefault;
window.onload = function load() {
	tableDefault = $("#stats").html();
	const cultList = cultdata;

	let tempString = "";
	for (let i = 0; i < cultList.length; i++) {
		const cult = cultList[i];

		tempString += `
			<li>
				<a id='${i}' href='#${encodeURI(cult.name).toLowerCase()}' title='${cult.name}'>
					<span class='name' title='${cult.name}'>${cult.name}</span>
				</a>
			</li>`;
	}
	$("ul.cults").append(tempString);

	const list = search({
		valueNames: ['name'],
		listClass: "cults"
	});

	initHistory()
};

function loadhash (id) {
	$("#stats").html(tableDefault);
	const cultlist = cultdata;
	const curcult = cultlist[id];

	const name = curcult.name;
	$("th#name").html(name);

	$("tr.text").remove();

	const textlist = curcult.text;
	let texthtml = "";

	if (curcult.goal !== undefined) texthtml += utils_combineText(curcult.goal.text, "p", "<span class='bold'>Goals:</span> ");
	if (curcult.cultists !== undefined) texthtml += utils_combineText(curcult.cultists.text, "p", "<span class='bold'>Typical Cultist:</span> ");
	if (curcult.signaturespells !== undefined) texthtml += utils_combineText(curcult.signaturespells.text, "p", "<span class='bold'>Signature Spells:</span> ");
	texthtml += utils_combineText(textlist, "p");

	$("tr#text").after("<tr class='text'><td colspan='6'>"+texthtml+"</td></tr>");
}

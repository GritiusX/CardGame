import React, { useContext, useEffect, useState } from "react";
import "./Test.css";
import { MyContext } from "../context/GameContext";

export default function Test() {
	const { monsters, setMonsters, destroyMobs } = useContext(MyContext);
	const pattern = new RegExp("^[A-Za-z+\\s+0-9-_']+$"); //este regex acepta Mayus, Minus, ' - _ , num y espacios
	useEffect(() => {
		console.log(
			"USEEFFECT",
			monsters.map((mob) => mob)
		);
	}, [monsters, destroyMobs]);

	const getRandomMonster = async (max) => {
		let url = "";
		let firstMobArray = [];
		let toBeFilteredArray = [];
		let pageId = Math.floor(Math.random() * max);

		if (pageId <= 1) {
			/* super importante que sea /raw?url y no /get?url */
			url =
				"https://api.allorigins.win/raw?url=https://swarfarm.com/api/v2/monsters/";
		} else {
			url = `https://api.allorigins.win/raw?url=https://swarfarm.com/api/v2/monsters/?page=${pageId}`;
		}

		await fetch(url)
			.then((resp) => resp.json())
			.then((mobs) => {
				firstMobArray = mobs.results.filter(
					(mob) =>
						mob.element !== "Dark" &&
						mob.element !== "Light" &&
						mob.element !== "Pure"
				);
			});
		toBeFilteredArray = firstMobArray.filter((mob) => {
			if (pattern.test(mob.name)) {
				if (!destroyMobs.includes(mob.name)) {
					return mob.name;
				}
			}
		});
		if (toBeFilteredArray.length == 0) {
			console.log("vacio");
			return getRandomMonster(21);
		} else {
			setMonsters(toBeFilteredArray);
		}
	};

	return (
		<>
			<article className="grid grid-rows-12 items-center justify-items-center flex-wrap m-auto max-w-[1250px] mt-5">
				<section>
					<button className="buttonRed" onClick={() => getRandomMonster(21)}>
						<img
							src={`https://api.allorigins.win/raw?url=https://swarfarm.com/static/herders/images/items/scroll_unknown.png`}
							alt="scroll"
						/>
					</button>
				</section>
				<section className="flex flex-wrap mt-3">
					{monsters.map((mob) => (
						<div key={mob.id} className="mx-3 bg-red-400 p-4">
							<img
								src={`https://api.allorigins.win/raw?url=https://swarfarm.com/static/herders/images/monsters/${mob.image_filename}`}
								alt={mob.name}
							/>
							<h3>{mob.name}</h3>
							<p>{mob.element}</p>
						</div>
					))}
				</section>
			</article>
		</>
	);
}

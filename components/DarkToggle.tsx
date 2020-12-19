import React, { useState } from 'react';
import "tailwindcss/tailwind.css";

export default function DarkToggle(){
	return (
		<label>
			Dark Mode{' '}
			<input className={`align-text-bottom`} type="range" min="0" max="1"></input>
		</label>
	);
}
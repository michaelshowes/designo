'use client';

import ErrorIcon from '@assets/svg/ErrorIcon';
import scss from './input.module.scss';
import { useState } from 'react';

type InputProps = {
	type?: 'text' | 'email' | 'tel' | 'textarea';
	label: string;
};

export default function Input({ type = 'text', label }: InputProps) {
	const [isRequired, setIsRequired] = useState(false);

	return (
		<label className={scss.input}>
			{type === 'textarea' ? (
				<textarea
					placeholder={label}
					rows={4}
					required={isRequired}
					onChange={() => setIsRequired(true)}
				/>
			) : (
				<input
					placeholder={label}
					type={type}
					required={isRequired}
					onChange={() => setIsRequired(true)}
				/>
			)}
			<div className={scss.errorMsg}>
				<span>Can&apos;t be empty</span>
				<ErrorIcon />
			</div>
		</label>
	);
}

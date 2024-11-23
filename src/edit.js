
import { __ } from '@wordpress/i18n';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { showStartingYear, startingYear, simpleText } = attributes;
	const current = new Date().getFullYear().toString();

	let displayDate;

	showStartingYear && startingYear ? displayDate = startingYear + ' ~ ' + current : displayDate = current;

	return (

		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'Copyright block')} >
					<ToggleControl
						checked={!!showStartingYear}
						label={__('Show Starting Year')}
						onChange={() => 
							setAttributes({
								showStartingYear: !showStartingYear,
							})
						}
					/>
					{showStartingYear && (
						<TextControl label={__('Start year')}
							value={startingYear || ''}
							onChange={(value) => setAttributes({ startingYear: value })}
						/>
					)}

						<TextControl label={__('Developed By')}
								value={simpleText}
								onChange={(value) => setAttributes({simpleText: value})}
						/>
					
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps()}>
			CopyRight © {displayDate}    {simpleText}
			</p>

		</>

	);
}

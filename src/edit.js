/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
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
				© {displayDate} - {simpleText}
			</p>

		</>

	);
}

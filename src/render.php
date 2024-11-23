<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php

$current_year = date( "Y" );

if ( ! empty( $attributes['startingYear'] ) && ! empty( $attributes['showStartingYear'] ) ) {
    $display_date = $attributes['startingYear'] . ' ~ ' . $current_year;
} else {
    $display_date = $current_year;
}


?>

<div style="padding: 10px" <?php echo get_block_wrapper_attributes(); ?>>

    CopyRight © <?php echo esc_html( $display_date );?> 
    <?php
    if($attributes['simpleText']){
         echo 'Developed and Maintained By: ' . $attributes['simpleText']; }
        ?>
</div>

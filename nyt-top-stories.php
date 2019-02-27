<?php
/*
Plugin Name: New York Times Top Stories
Plugin URI: https://github.com/c-mcguire/NYT-Top-Stories
Description: Widget that shows the current top stories from the New York Times
Author: chris@new-volume.com
Version: 1.0
*/
// Block direct requests
// This prevents somebody from opening the URL directly to the widget itself
if ( !defined('ABSPATH') )
	die('-1');

function nyt_app() {
    // Css for the plugin
    wp_enqueue_style('nyt style', plugin_dir_url( __FILE__ ) .'/css/nyt.css');
    // Javascript to populate the element with information
    wp_enqueue_script( 'nyt_api_call', plugin_dir_url( __FILE__ ) . '/js/nyt.js', true );
    $appDiv = "<div id='nyt-app-container' class='nyt-top-stories-container'></div>";
    return $appDiv;
}
add_shortcode('nyt_top_stories', 'nyt_app');

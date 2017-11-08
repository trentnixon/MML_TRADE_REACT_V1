<?php
/*React APP*/


/* Create Custom post types for MML Sections */


add_action( 'init', 'create_post_type' );

function create_post_type() {
	
 /*******************************************  */
 /* Hero Images */
 /*******************************************  */ 	
  register_post_type( 'hero_images',
    array(
      'labels' => array(
        'name' => __( 'Heros' ),
        'singular_name' => __( 'Heros' )
      ),
	  'menu_icon' => 'dashicons-images-alt2',
      'public' => true,
      'has_archive' => true,
	  'rewrite' => array('slug' => 'hero_images'),
	  'taxonomies' => array('post_tag','category'),
	  'show_in_rest'       => true,
  	  'rest_base'          => 'hero_images',
  	  'rest_controller_class' => 'WP_REST_Posts_Controller',
	  'supports' => array( 'title', 'editor', 'custom-fields' )
    )
  );
  /* End */
  
  /*******************************************  */
 /* News Item */
 /*******************************************  */ 	
  register_post_type( 'news_item',
    array(
      'labels' => array(
        'name' => __( 'News Item' ),
        'singular_name' => __( 'News Item' )
      ),
	  'menu_icon' => 'dashicons-analytics',
      'public' => true,
      'has_archive' => true,
	  'rewrite' => array('slug' => 'news_item'),
	  'taxonomies' => array('post_tag','category'),
	  'show_in_rest'       => true,
  	  'rest_base'          => 'news_item',
  	  'rest_controller_class' => 'WP_REST_Posts_Controller',
	  'supports' => array( 'title', 'editor', 'custom-fields', 'excerpt' , 'thumbnail')
    )
  );
  /* End */
  
 /*******************************************  */
 /* Station Showreels */
 /*******************************************  */ 	
  register_post_type( 'station_showreels',
    array(
      'labels' => array(
        'name' => __( 'Station Showreels' ),
        'singular_name' => __( 'Station Showreels' )
      ),
	  'menu_icon' => 'dashicons-video-alt2',
      'public' => true,
      'has_archive' => true,
	  'rewrite' => array('slug' => 'station_showreels'),
	  'taxonomies' => array('post_tag','category'),
	  'show_in_rest'       => true,
  	  'rest_base'          => 'station_showreels',
  	  'rest_controller_class' => 'WP_REST_Posts_Controller',
	  'supports' => array( 'title', 'editor', 'custom-fields' )
    )
  );
  /* End */


 /*******************************************  */
 /* Media Kits */
 /*******************************************  */ 	
  register_post_type( 'media_kits',
    array(
      'labels' => array(
        'name' => __( 'Media Kits' ),
        'singular_name' => __( 'Media Kits' )
      ),
	  'menu_icon' => 'dashicons-media-document',
      'public' => true,
      'has_archive' => true,
	  'rewrite' => array('slug' => 'media_kits'),
	  'taxonomies' => array('post_tag','category'),
	  'show_in_rest'       => true,
  	  'rest_base'          => 'media_kits',
  	  'rest_controller_class' => 'WP_REST_Posts_Controller',
	  'supports' => array( 'title', 'editor', 'custom-fields' )
    )
  );
  /* End */
  
 
 /*******************************************  */
 /* Case Studies */
 /*******************************************  */ 	
  register_post_type( 'case_studies',
    array(
      'labels' => array(
        'name' => __( 'Case Studies' ),
        'singular_name' => __( 'Case Studies' )
      ),
	  'menu_icon' => 'dashicons-video-alt3',
      'public' => true,
      'has_archive' => true,
	  'rewrite' => array('slug' => 'case_studies'),
	  'taxonomies' => array('post_tag','category'),
	  'show_in_rest'       => true,
  	  'rest_base'          => 'case_studies',
  	  'rest_controller_class' => 'WP_REST_Posts_Controller',
	  'supports' => array( 'title', 'editor', 'custom-fields' )
    )
  );
  /* End */
 

 /*******************************************  */
 /* Show Cases */
 /*******************************************  */ 	
  register_post_type( 'show_case',
    array(
      'labels' => array(
        'name' => __( 'Show Case' ),
        'singular_name' => __( 'Show Case' )
      ),
	  'menu_icon' => 'dashicons-megaphone',
      'public' => true,
      'has_archive' => true,
	  'rewrite' => array('slug' => 'show_case'),
	  'taxonomies' => array('post_tag','category'),
	  'show_in_rest'       => true,
  	  'rest_base'          => 'show_case',
  	  'rest_controller_class' => 'WP_REST_Posts_Controller',
	  'supports' => array( 'title', 'editor', 'custom-fields' )
    )
  );
  /* End */  
   
   
  /*******************************************  */
 /* Branded Podcasts */
 /*******************************************  */ 	
  register_post_type( 'branded_podcasts',
    array(
      'labels' => array(
        'name' => __( 'Branded Podcasts' ),
        'singular_name' => __( 'Branded Podcasts' )
      ),
	  'menu_icon' => 'dashicons-microphone',
      'public' => true,
      'has_archive' => true,
	  'rewrite' => array('slug' => 'branded_podcasts'),
	  'taxonomies' => array('post_tag','category'),
	  'show_in_rest'       => true,
  	  'rest_base'          => 'branded_podcasts',
  	  'rest_controller_class' => 'WP_REST_Posts_Controller',
	  'supports' => array( 'title', 'editor', 'custom-fields' )
    )
  );
  /* End */   
   
}
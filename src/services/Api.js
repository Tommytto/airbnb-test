export default class Api {
    async request(url, options) {
        const response = await fetch(url, options);
        return response.json();
    }

    getPageInfo() {
        const airbnbUrl =
            'https://www.airbnb.com/api/v2/explore_tabs?_format=for_explore_search_web&_intents=p1&auto_ib=false&client_session_id=ef29ad76-6f97-450b-a201-cbf18828478f&currency=RUB&experiences_per_grid=20&fetch_filters=true&guidebooks_per_grid=20&has_zero_guest_treatment=true&is_guided_search=true&is_new_cards_experiment=true&is_standard_search=true&items_per_grid=18&key=d306zoyjsyarp7ifhu67rjxn52tv0t20&locale=en&luxury_pre_launch=false&metadata_only=false&query_understanding_enabled=true&refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A53&satori_version=1.1.9&screen_height=981&screen_size=small&screen_width=700&search_type=SECTION_NAVIGATION&selected_tab_id=experience_tab&show_groupings=true&supports_for_you_v3=true&timezone_offset=420&version=1.5.7';
        const response = this.request(airbnbUrl);
        console.log(response);
        return response;
    }
}

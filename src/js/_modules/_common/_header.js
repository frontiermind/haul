export default class {

    /**
     * constructor
     */
    constructor() {
        this.$header = $('.js-header');
        this.$headerBtn = $('.js-header-btn');
    }

    /**
     * init
     */
    init() {
        this.setEvent();
    }

    /**
     * setEvent
     */
    setEvent() {
        this.$headerBtn.on('click', () => {
            this.$header.toggleClass("is-active")
            return false;
        });
    }
}
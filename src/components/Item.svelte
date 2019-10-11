<style>
    .item {
        margin: 0 16px;
        display: inline-block;
        font-size: 24px;
    }
    /* mobile */
    @media (max-width: 576px) {
        .item {
            font-size: 16px;
        }
        .item:not(:first-child) {
            margin-top: 24px;
        }
    }
</style>

<span class="item">
    <slot></slot>
</span>
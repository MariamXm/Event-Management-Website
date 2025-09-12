<template>
    <div class="detail-page-button-reaction-section">
    <div class="location-section">
        <GmapMap ref="map-123" :center="{lat:30.35, lng:70.5}" :zoom="14" map-type-id="roadmap" style="width: 100%; height: 400px;">
            <GmapMarker :position="{lat:30.35, lng:70.5}"  :clickable="true" :draggable="true"/>
        </GmapMap>
    </div>
</div>
</template>
<!-- this.$refs['map-123'] -->
<script>
import { mapGetters } from 'vuex'

export default{
    name: "EventLocation",
    data() {
        return{

        }
        
    },
    computed: {
        ...mapGetters(['getEvents', 'getTicketsByEventId']),
    },
}
</script>
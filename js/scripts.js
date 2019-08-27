//business logic
function Place(placeName, placeLocation, placeLandMark, time, notes) {
    this.placeName = placeName;
    this.placeLocation = placeLocation;
    this.placeLandMark = placeLandMark;
    this.time = time;
    this.notes = notes;

}

function resetFields() {
    $("input#new-place-name").val("");
    $("input#new-location-name").val("");
    $("input.landmark").val("");
    $("input.time").val("");
    $("input.notes").val("");
}

//user inteface logic

$(document).ready(function () {

    $('form#new-place').submit(function (event) {
        event.preventDefault();

        let placeInput = $('input#new-place-name').val();
        let locationInput = $('input#new-location-name').val();
        let landmarkInput = $('input.landmark').val();
        let timeInput = $('input.time').val();
        let notesInput = $('input.notes').val();
        let newPlace = new Place(placeInput, locationInput, landmarkInput, timeInput, notesInput);



        $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");
        $(".place").last().click(function () {
            $("#show-places").show();
            $("#show-places h2").text(newPlace.placeName);
            $(".mLocation").text(newPlace.placeLocation);
            $(".mLandmarks").text(newPlace.placeLandMark);
            $(".mTime").text(newPlace.time);
            $(".mNotes").text(newPlace.notes);

        });

        resetFields();

    });
});

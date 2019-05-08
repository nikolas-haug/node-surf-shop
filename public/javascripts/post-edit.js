// find post edid form
let postEditForm = document.getElementById('postEditForm');
// add submiot listener to post edid form
postEditForm.addEventListener('submit', function (event) {
    // find length of upladed images
    let imageUploads = document.getElementById('imageUpload').files.length;
    // find total number of exsisting images
    let exsitingImgs = document.querySelectorAll('.imageDeleteCheckbox').length;
    // find total number of potential deletions
    let imgDeletions = document.querySelectorAll('.imageDeleteCheckbox:checked').length;
    // figure out if the form can be submitted or not
    let newTotal = exsitingImgs - imgDeletions + imageUploads;
    if (newTotal > 4) {
        event.preventDefault();
        let removalAmt = newTotal - 4;
        alert(`You need to remove at least ${removalAmt} (more) image${removalAmt === 1 ? '' : 's'}!`);
    }
});
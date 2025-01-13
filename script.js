function submitData() {
    // Get form data
    const name = document.getElementById('name').value;
    const postLink = document.getElementById('postLink').value;
    const likes = document.getElementById('likes').value;

    // Prepare mailto link
    const mailto = `mailto:moghaeashu@gmail.com?subject=Form Submission&body=
Name: ${encodeURIComponent(name)}%0A
Post/Reel Link: ${encodeURIComponent(postLink)}%0A
Number of Likes: ${encodeURIComponent(likes)}%0A
(Please attach the payment screenshot manually)`;

    // Redirect to mailto link
    window.location.href = mailto;
}
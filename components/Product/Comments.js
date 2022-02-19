import { Rate } from "antd";

const Comments = ({ overView, showCommentDialoge, reviews }) => {
  console.log(overView);
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between pb-2 mt-6 mb-2 border-b border-d-border-gray">
        <div>
          <p className="mb-0 font-semibold">
            نظرات{" - " + overView?.TotalReviews} / میانگین امتیاز
            {" - " + (overView?.RatingSum / overView?.TotalReviews).toFixed(1)}
          </p>
        </div>
        <p
          className="mb-0 cursor-pointer hover:underline text-d-primary"
          onClick={showCommentDialoge}
        >
          ارسال نظر / امتیاز
        </p>
      </div>

      {reviews &&
        reviews.Items.map((comment, index) => {
          return (
            <div className="mt-3" key={index}>
              <div className="flex items-center">
                <div className="flex items-center justify-center text-sm bg-indigo-200 rounded-full w-9 h-9 ">
                  <p className="mb-0">
                    {comment?.CustomerName && comment.CustomerName[0]}
                  </p>
                </div>
                <div className="flex flex-col mr-2">
                  <span className="m-0">{comment.CustomerName}</span>
                  <Rate
                    size="small"
                    disabled
                    value={comment.Rating}
                    style={{ fontSize: "0.75rem", margin: "0" }}
                  />
                </div>
              </div>

              {comment.ReviewText && (
                <div className="px-2 py-3 mt-2 text-xs rounded-lg max-w-[100ch] rounded-tr-none bg-gray-200/50">
                  {comment.ReviewText}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Comments;

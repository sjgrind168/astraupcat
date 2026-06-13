export const scienceReviewPages = Array.from(
  { length: 51 },
  (_, i) => ({
    id: `science-review-${i + 1}`,
    page: i + 14,
    image: `/private-reviewer/collegio/pages/page-${String(i + 14).padStart(3, "0")}.jpg`,
  })
);



const articleColumns = [
  { name: "ID", uid: "id", sortable: false },
  { name: "TITLE", uid: "title", sortable: true },
  { name: "CATEGORY", uid: "category", sortable: true },
  { name: "PUBLISHED DATE", uid: "publishedDate", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "VIEWS", uid: "views", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const articleStatusOptions = [
  { name: "Published", uid: "published" },
  { name: "Draft", uid: "draft" },
  { name: "Archived", uid: "archived" },
];

const statusOptions = [
  { name: "Published", uid: "published" },
  { name: "Draft", uid: "draft" },
];
const articles = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    author: {
      name: "John Doe",
      avatar: "https://via.placeholder.com/150",
      email: "john@example.com",
      role: "Admin",
      team: "Marketing",
      status: "active",
      country: "United States",
      city: "New York",
      address: "123 Main St, Anytown, USA",
      phone: "(123) 456-7890",
      website: "https://example.com",
      company: "Example Inc.",
      jobTitle: "CEO",
    },
    category: "Programming",
    publishedDate: "2024-11-01",
    status: "published",
    views: 1050,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "The Rise of Artificial Intelligence",
    author: {
      name: "Jane Smith",
      avatar: "https://via.placeholder.com/150",
      email: "jane@example.com",
      role: "Editor",
      team: "Tech",
      status: "active",
      country: "Canada",
      city: "Toronto",
      address: "456 Elm St, Somewhere, CA",
      phone: "(234) 567-8901",
      website: "https://aiinsights.com",
      company: "AI Insights",
      jobTitle: "Tech Lead",
    },
    category: "Technology",
    publishedDate: "2024-10-25",
    status: "published",
    views: 1200,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "10 Tips for Effective Remote Work",
    author: {
      name: "Alice Brown",
      avatar: "https://via.placeholder.com/150",
      email: "alice@example.com",
      role: "Contributor",
      team: "Workplace",
      status: "active",
      country: "United Kingdom",
      city: "London",
      address: "789 Maple St, Elsewhere, UK",
      phone: "(345) 678-9012",
      website: "https://remoteworktips.com",
      company: "Remote Work Inc.",
      jobTitle: "HR Manager",
    },
    category: "Workplace",
    publishedDate: "2024-11-20",
    status: "draft",
    views: 450,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Exploring the Wonders of Space",
    author: {
      name: "Robert Wilson",
      avatar: "https://via.placeholder.com/150",
      email: "robert@example.com",
      role: "Editor",
      team: "Science",
      status: "active",
      country: "Australia",
      city: "Sydney",
      address: "101 Star St, Galaxy City, AU",
      phone: "(456) 789-0123",
      website: "https://spacestudies.com",
      company: "Space Explorers",
      jobTitle: "Research Lead",
    },
    category: "Science",
    publishedDate: "2024-09-15",
    status: "archived",
    views: 980,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Mastering CSS Grid and Flexbox",
    author: {
      name: "Emily Davis",
      avatar: "https://via.placeholder.com/150",
      email: "emily@example.com",
      role: "Contributor",
      team: "Design",
      status: "active",
      country: "Germany",
      city: "Berlin",
      address: "202 Design Lane, Artistic Town, DE",
      phone: "(567) 890-1234",
      website: "https://cssdesigns.com",
      company: "Creative Design Co.",
      jobTitle: "Frontend Developer",
    },
    category: "Design",
    publishedDate: "2024-08-10",
    status: "published",
    views: 600,
    thumbnail: "https://via.placeholder.com/150",
  },
];



const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Manager",
    team: "Management",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    status: "active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Designer",
    team: "Design",
    status: "paused",
    age: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "HR Manager",
    team: "HR",
    status: "active",
    age: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "F. Manager",
    team: "Finance",
    status: "vacation",
    age: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Ops Manager",
    team: "Operations",
    status: "active",
    age: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Jr. Dev",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "P. Manager",
    team: "Product",
    status: "paused",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "S. Manager",
    team: "Security",
    status: "active",
    age: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "M. Specialist",
    team: "Marketing",
    status: "active",
    age: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "IT Specialist",
    team: "I. Technology",
    status: "paused",
    age: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Manager",
    team: "Sales",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "active",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "active",
    age: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Administrator",
    team: "Information Technology",
    status: "paused",
    age: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Coordinator",
    team: "Operations",
    status: "active",
    age: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
  },
];

export { articleColumns, articles, articleStatusOptions, users, statusOptions };


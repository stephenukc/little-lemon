Admin & Authentication Endpoints:
/admin/
→ Django admin panel

/auth/users/
→ User registration (Djoser)

/auth/users/me/
→ Get current user details

/auth/token/login/
→ Obtain auth token (Djoser endpoint)

/auth/token/logout/
→ Logout token (Djoser endpoint)

/auth/
→ Djoser base URLs

/api-auth/login/
→ DRF browsable API login

/api-auth/logout/
→ DRF browsable API logout

/restaurant/api-token-auth/
→ Token login using obtain_auth_token




Restaurant App Endpoints:
/restaurant/
→ Root index view from views.index

/restaurant/menu/
→ GET (list) and POST (create) menu items

/restaurant/menu/<int:pk>
→ GET, PUT, DELETE single menu item




Booking Viewset Endpoints
These come from the DRF router (BookingViewset at /restaurant/booking/tables/):

/restaurant/booking/tables/
→ GET (list all bookings), POST (create booking)

/restaurant/booking/tables/<int:pk>/
→ GET, PUT, PATCH, DELETE for a specific booking
const mockResponse={
    data:
    {
        result: [
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Wallace",
                    "last": "Nguyen"
                },
                "location": {
                    "street": {
                        "number": 9286,
                        "name": "Kingsway"
                    },
                    "city": "St Davids",
                    "state": "Avon",
                    "country": "United Kingdom",
                    "postcode": "SI53 8FL",
                    "coordinates": {
                        "latitude": "-12.3486",
                        "longitude": "-115.7669"
                    },
                    "timezone": {
                        "offset": "-3:30",
                        "description": "Newfoundland"
                    }
                },
                "email": "wallace.nguyen@example.com",
                "login": {
                    "uuid": "fa5e5c0d-82cc-4c08-9a64-c097d449725e",
                    "username": "happyfish794",
                    "password": "nono",
                    "salt": "HkVUVbFK",
                    "md5": "564268896d68e53b86a9a86ba26487ec",
                    "sha1": "b583497a59b141112b7146f6f3eb803060ccd183",
                    "sha256": "a24d98c7bd252e3038e448787c6f40cf7270d012524f34f0c1ecd0817ae748b6"
                },
                "dob": {
                    "date": "1947-05-08T12:56:03.282Z",
                    "age": 76
                },
                "registered": {
                    "date": "2014-08-18T03:58:40.411Z",
                    "age": 9
                },
                "phone": "019467 80569",
                "cell": "07302 076464",
                "id": {
                    "name": "NINO",
                    "value": "KR 63 37 97 M"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/47.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
                },
                "nat": "GB"
            }
        ]
    }
}

export default {
    get:jest.fn().mockResolvedValue(mockResponse)
}
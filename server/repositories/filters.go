package repositories

import (
	// "fmt"
	"housy/models"
	"net/url"
	"strconv"

	// "strconv"

	"gorm.io/gorm"
)

type FilterRepository interface {
	FindCity() ([]models.User, error)
	// SingleParameter(params int) ([]models.Property, error)
	MultiParameter(params url.Values) ([]models.House, error)
}

func RepositoryFilter(db *gorm.DB) *repository {
	return &repository{db}
}

// func (r *repository) FindCity()([]models.User, error){
// 	var cities []models.User
// 	err := r.db.Find(&cities).Error

// 	return cities, err
// }

// func (r *repository) SingleParameter(params int) ([]models.House, error) {
// 	var properties []models.House
// 	err := r.db.Where("city_id = ?", params).Preload("City").Find(&properties).Error
// 	fmt.Println(properties)
// 	return properties, err
// }

func (r *repository) MultiParameter(params url.Values) ([]models.House, error) {
	var properties []models.House

	typeRent := params.Get("typeRent")
	price, _ := strconv.ParseFloat(params.Get("price"), 64) 
	bedroom, _ := strconv.Atoi(params.Get("bedroom"))
	bathroom, _ := strconv.Atoi(params.Get("bathroom"))
	amenities := params.Get("amenities")


	err := r.db.Where("type_rent = ? AND price < ? AND bedroom = ? AND bathroom = ? AND amenities = ?", typeRent, price, bedroom, bathroom, amenities).Preload("City").Find(&properties).Error

	return properties, err
}